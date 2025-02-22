package connection

import (
	"context"
	"github.com/kurtosis-tech/kurtosis/api/golang/engine/kurtosis_engine_rpc_api_bindings"
	"github.com/kurtosis-tech/kurtosis/api/golang/engine/lib/kurtosis_context"
	"github.com/kurtosis-tech/kurtosis/container-engine-lib/lib/backend_impls/kubernetes/kubernetes_manager"
	"github.com/kurtosis-tech/kurtosis/container-engine-lib/lib/backend_impls/kubernetes/object_attributes_provider/label_key_consts"
	"github.com/kurtosis-tech/kurtosis/container-engine-lib/lib/backend_impls/kubernetes/object_attributes_provider/label_value_consts"
	"github.com/kurtosis-tech/kurtosis/container-engine-lib/lib/backend_interface/objects/engine"
	"github.com/kurtosis-tech/kurtosis/container-engine-lib/lib/backend_interface/objects/port_spec"
	"github.com/kurtosis-tech/stacktrace"
	v1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/client-go/kubernetes"
	"k8s.io/client-go/kubernetes/scheme"
	restclient "k8s.io/client-go/rest"
	"net/url"
)

const (
	grpcPortIdStr           = "grpc"
	httpApplicationProtocol = "http"
)

var noWait *port_spec.Wait = nil

type GatewayConnectionProvider struct {
	config            *restclient.Config
	kubernetesManager *kubernetes_manager.KubernetesManager
	providerContext   context.Context
}

func NewGatewayConnectionProvider(ctx context.Context, kubernetesConfig *restclient.Config) (*GatewayConnectionProvider, error) {
	// Necessary to set these fields for kubernetes portforwarder
	kubernetesConfig.NegotiatedSerializer = scheme.Codecs.WithoutConversion()
	kubernetesConfig.GroupVersion = &schema.GroupVersion{Group: "", Version: "v1"}

	clientSet, err := kubernetes.NewForConfig(kubernetesConfig)
	if err != nil {
		return nil, stacktrace.Propagate(err, "Expected to be able to get config for Kubernetes client set, instead a non nil error was returned")
	}
	kubernetesManager := kubernetes_manager.NewKubernetesManager(clientSet, kubernetesConfig)

	return &GatewayConnectionProvider{
		config:            kubernetesConfig,
		kubernetesManager: kubernetesManager,
		providerContext:   ctx,
	}, nil
}

func (provider *GatewayConnectionProvider) ForEngine(engine *engine.Engine) (GatewayConnectionToKurtosis, error) {
	// Forward public GRPC ports of engine
	enginePublicGrpcPortSpec, err := port_spec.NewPortSpec(kurtosis_context.DefaultGrpcEngineServerPortNum, port_spec.TransportProtocol_TCP, httpApplicationProtocol, noWait)
	if err != nil {
		return nil, stacktrace.Propagate(err, "Expected to be able to get a port-spec describing the public GRPC port of a Kurtosis engine, instead a non-nil error was returned")
	}
	enginePorts := map[string]*port_spec.PortSpec{
		grpcPortIdStr: enginePublicGrpcPortSpec,
	}
	podPortforwardEndpoint, err := provider.getEnginePodPortforwardEndpoint(engine.GetGUID())
	if err != nil {
		return nil, stacktrace.Propagate(err, "Expected to be able to find an api endpoint for Kubernetes portforward to engine '%v', instead a non-nil error was returned", engine.GetGUID())
	}
	engineConnection, err := newLocalPortToPodPortConnection(provider.config, podPortforwardEndpoint, enginePorts)
	if err != nil {
		return nil, stacktrace.Propagate(err, "Expected to be able to get a connection to engine '%v', instead a non-nil error was returned", engine.GetGUID())
	}
	return engineConnection, nil
}

func (provider *GatewayConnectionProvider) ForEnclaveApiContainer(enclaveInfo *kurtosis_engine_rpc_api_bindings.EnclaveInfo) (GatewayConnectionToKurtosis, error) {
	apiContainerInfo := enclaveInfo.ApiContainerInfo
	// We want the port on the kubernetes pod that tbe api container is listening on
	grpcPortUint16 := uint16(apiContainerInfo.GetGrpcPortInsideEnclave())
	apiContainerGrpcPortSpec, err := port_spec.NewPortSpec(grpcPortUint16, port_spec.TransportProtocol_TCP, httpApplicationProtocol, noWait)
	if err != nil {
		return nil, stacktrace.Propagate(err, "Expected to be able to get a port spec describing api container GRPC port on port number'%v', instead a non-nil error was returned", grpcPortUint16)
	}
	apiContainerPorts := map[string]*port_spec.PortSpec{
		grpcPortIdStr: apiContainerGrpcPortSpec,
	}
	enclaveId := enclaveInfo.GetEnclaveUuid()
	podPortforwardEndpoint, err := provider.getApiContainerPodPortforwardEndpoint(enclaveId)
	if err != nil {
		return nil, stacktrace.Propagate(err, "Expected to be able to get an endpoint for portforwarding to the API Container in enclave '%v', instead a non-nil error was returned", enclaveId)
	}
	apiContainerConnection, err := newLocalPortToPodPortConnection(provider.config, podPortforwardEndpoint, apiContainerPorts)
	if err != nil {
		return nil, stacktrace.Propagate(err, "Expected to be able to connect to api container in enclave '%v', instead a non-nil error was returned", enclaveId)
	}

	return apiContainerConnection, nil
}

func (provider *GatewayConnectionProvider) ForUserService(enclaveId string, serviceUuid string, servicePortSpecs map[string]*port_spec.PortSpec) (GatewayConnectionToKurtosis, error) {
	podPortforwardEndpoint, err := provider.getUserServicePodPortforwardEndpoint(enclaveId, serviceUuid)
	if err != nil {
		return nil, stacktrace.Propagate(err, "Expected to be able to find an api endpoint for Kubernetes portforward to a Kurtosis user service with id '%v' in enclave '%v', instead a non-nil error was returned", enclaveId, serviceUuid)
	}
	userServiceConnection, err := newLocalPortToPodPortConnection(provider.config, podPortforwardEndpoint, servicePortSpecs)
	if err != nil {
		return nil, stacktrace.Propagate(err, "Expected to be able to connect to user service with id '%v', instead a non-nil error was returned", serviceUuid)
	}

	return userServiceConnection, nil
}

func (provider *GatewayConnectionProvider) getEnginePodPortforwardEndpoint(engineGuid engine.EngineGUID) (*url.URL, error) {
	engineLabels := map[string]string{
		label_key_consts.IDKubernetesLabelKey.GetString():                   string(engineGuid),
		label_key_consts.KurtosisResourceTypeKubernetesLabelKey.GetString(): label_value_consts.EngineKurtosisResourceTypeKubernetesLabelValue.GetString(),
		label_key_consts.AppIDKubernetesLabelKey.GetString():                label_value_consts.AppIDKubernetesLabelValue.GetString(),
	}
	// Call k8s to find our engine namespace
	engineNamespaceList, err := provider.kubernetesManager.GetNamespacesByLabels(provider.providerContext, engineLabels)
	if err != nil {
		return nil, stacktrace.Propagate(err, "Expected to be able to get engine namespaces with labels '%+v`, instead a non-nil error was returned", engineLabels)
	}
	if len(engineNamespaceList.Items) != 1 {
		return nil, stacktrace.NewError("Expected to find exactly 1 engine namespace matching engine GUID '%v', but instead found '%v'", engineGuid, len(engineNamespaceList.Items))
	}
	engineNamespaceName := engineNamespaceList.Items[0].Name

	// Get running Engine pods from Kubernetes
	runningEnginePodNames, err := provider.getRunningPodNamesByLabels(engineNamespaceName, engineLabels)
	if err != nil {
		return nil, stacktrace.Propagate(err, "Expected to be able to get the names of running engine pods with labels '%+v', instead a non-nil error was returned", engineLabels)
	}
	if len(runningEnginePodNames) != 1 {
		return nil, stacktrace.NewError("Expected to find exactly 1 running Kurtosis Engine pod, instead found '%v'", len(runningEnginePodNames))
	}
	enginePodName := runningEnginePodNames[0]

	return provider.kubernetesManager.GetPodPortforwardEndpointUrl(engineNamespaceName, enginePodName), nil
}

func (provider *GatewayConnectionProvider) getApiContainerPodPortforwardEndpoint(enclaveId string) (*url.URL, error) {
	enclaveLabels := map[string]string{
		label_key_consts.EnclaveUUIDKubernetesLabelKey.GetString():          enclaveId,
		label_key_consts.KurtosisResourceTypeKubernetesLabelKey.GetString(): label_value_consts.EnclaveKurtosisResourceTypeKubernetesLabelValue.GetString(),
		label_key_consts.AppIDKubernetesLabelKey.GetString():                label_value_consts.AppIDKubernetesLabelValue.GetString(),
	}
	enclaveNamespaceList, err := provider.kubernetesManager.GetNamespacesByLabels(provider.providerContext, enclaveLabels)
	if err != nil {
		return nil, stacktrace.Propagate(err, "Expected to be able to get enclaves namespaces with labels '%+v`, instead a non-nil error was returned", enclaveLabels)
	}
	if len(enclaveNamespaceList.Items) != 1 {
		return nil, stacktrace.NewError("Expected to find exactly 1 enclave namespace with enclaveId '%v', instead found '%v'", enclaveId, len(enclaveNamespaceList.Items))
	}
	enclaveNamespaceName := enclaveNamespaceList.Items[0].Name

	// Get running API Container pods from Kubernetes
	apiContainerPodLabels := map[string]string{
		label_key_consts.KurtosisResourceTypeKubernetesLabelKey.GetString(): label_value_consts.APIContainerKurtosisResourceTypeKubernetesLabelValue.GetString(),
		label_key_consts.AppIDKubernetesLabelKey.GetString():                label_value_consts.AppIDKubernetesLabelValue.GetString(),
	}
	runningApiContainerPodNames, err := provider.getRunningPodNamesByLabels(enclaveNamespaceName, apiContainerPodLabels)
	if err != nil {
		return nil, stacktrace.Propagate(err, "Expected to be able to get running API container pods with labels '%+v', instead a non-nil error was returned", apiContainerPodLabels)
	}
	if len(runningApiContainerPodNames) != 1 {
		return nil, stacktrace.NewError("Expected to find exactly 1 running API container pod in enclave '%v', instead found '%v'", enclaveId, len(runningApiContainerPodNames))
	}
	apiContainerPodName := runningApiContainerPodNames[0]

	return provider.kubernetesManager.GetPodPortforwardEndpointUrl(enclaveNamespaceName, apiContainerPodName), nil
}

func (provider *GatewayConnectionProvider) getUserServicePodPortforwardEndpoint(enclaveId string, serviceUuid string) (*url.URL, error) {
	userServiceNamespaceName, err := provider.getEnclaveNamespaceNameForEnclaveId(enclaveId)
	if err != nil {
		return nil, stacktrace.Propagate(err, "Expected to be able to get a Kubernetes namespace corresponding to a Kurtosis enclave with id '%v', instead a non-nil error was returned", enclaveId)
	}
	userServiceLabels := map[string]string{
		label_key_consts.GUIDKubernetesLabelKey.GetString():                 serviceUuid,
		label_key_consts.KurtosisResourceTypeKubernetesLabelKey.GetString(): label_value_consts.UserServiceKurtosisResourceTypeKubernetesLabelValue.GetString(),
		label_key_consts.AppIDKubernetesLabelKey.GetString():                label_value_consts.AppIDKubernetesLabelValue.GetString(),
	}
	runningUserServicePodNames, err := provider.getRunningPodNamesByLabels(userServiceNamespaceName, userServiceLabels)
	if err != nil {
		return nil, stacktrace.Propagate(err, "Expected to be able to get running user service pods with labels '%+v' in namespace '%v', instead a non nil error was returned", runningUserServicePodNames, userServiceNamespaceName)
	}
	if len(runningUserServicePodNames) != 1 {
		return nil, stacktrace.NewError("Expected to find exactly 1 running user service pod with guid '%v' in enclave '%v', instead found '%v'", serviceUuid, enclaveId, len(runningUserServicePodNames))
	}
	userServicePodName := runningUserServicePodNames[0]
	return provider.kubernetesManager.GetPodPortforwardEndpointUrl(userServiceNamespaceName, userServicePodName), nil
}

func (provider *GatewayConnectionProvider) getRunningPodNamesByLabels(namespace string, podLabels map[string]string) ([]string, error) {
	podList, err := provider.kubernetesManager.GetPodsByLabels(provider.providerContext, namespace, podLabels)
	if err != nil {
		return nil, stacktrace.Propagate(err, "Expected to be able to get pods with labels '%+v', instead a non-nil error was returned", podLabels)
	}

	runningPodNames := []string{}
	for _, pod := range podList.Items {
		podPhase := pod.Status.Phase

		if podPhase == v1.PodRunning {
			runningPodNames = append(runningPodNames, pod.Name)
		}
	}
	return runningPodNames, nil
}

func (provider *GatewayConnectionProvider) getEnclaveNamespaceNameForEnclaveId(enclaveId string) (string, error) {
	enclaveLabels := map[string]string{
		label_key_consts.EnclaveUUIDKubernetesLabelKey.GetString():          enclaveId,
		label_key_consts.KurtosisResourceTypeKubernetesLabelKey.GetString(): label_value_consts.EnclaveKurtosisResourceTypeKubernetesLabelValue.GetString(),
		label_key_consts.AppIDKubernetesLabelKey.GetString():                label_value_consts.AppIDKubernetesLabelValue.GetString(),
	}
	enclaveNamespaceList, err := provider.kubernetesManager.GetNamespacesByLabels(provider.providerContext, enclaveLabels)
	if err != nil {
		return "", stacktrace.Propagate(err, "Expected to be able to get enclaves namespaces with labels '%+v`, instead a non-nil error was returned", enclaveLabels)
	}
	if len(enclaveNamespaceList.Items) != 1 {
		return "", stacktrace.NewError("Expected to find exactly 1 enclave namespace with enclaveId '%v', instead found '%v'", enclaveId, len(enclaveNamespaceList.Items))
	}
	return enclaveNamespaceList.Items[0].Name, nil
}
