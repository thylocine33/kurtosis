package api_container_gateway

import (
	"context"
	"github.com/kurtosis-tech/kurtosis/api/golang/core/kurtosis_core_rpc_api_bindings"
	"github.com/kurtosis-tech/kurtosis/api/golang/core/lib/binding_constructors"
	"github.com/kurtosis-tech/kurtosis/cli/cli/kurtosis_gateway/connection"
	"github.com/kurtosis-tech/kurtosis/container-engine-lib/lib/backend_interface/objects/port_spec"
	"github.com/kurtosis-tech/stacktrace"
	"github.com/sirupsen/logrus"
	"google.golang.org/grpc"
	"google.golang.org/protobuf/types/known/emptypb"
	"io"
	"sync"
)

const (
	localHostIpStr                            = "127.0.0.1"
	errorCallingRemoteApiContainerFromGateway = "Expected to be able to call the remote api container from the gateway, instead a non nil err was returned"
)

type ApiContainerGatewayServiceServer struct {
	// Id of enclave the API container is running in
	enclaveId string
	// Client for the api container we'll be connecting too
	remoteApiContainerClient kurtosis_core_rpc_api_bindings.ApiContainerServiceClient

	// Provides connections to Kurtosis objectis in cluster
	connectionProvider *connection.GatewayConnectionProvider

	// ServiceMap and mutex to protect it
	mutex                               *sync.Mutex
	userServiceGuidToLocalConnectionMap map[string]*runningLocalServiceConnection
}

type runningLocalServiceConnection struct {
	localPublicServicePorts map[string]*kurtosis_core_rpc_api_bindings.Port
	localPublicIp           string
	kurtosisConnection      connection.GatewayConnectionToKurtosis
}

func NewEnclaveApiContainerGatewayServer(connectionProvider *connection.GatewayConnectionProvider, remoteApiContainerClient kurtosis_core_rpc_api_bindings.ApiContainerServiceClient, enclaveId string) (resultCoreGatewayServerService *ApiContainerGatewayServiceServer, resultGatewayCloseFunc func()) {
	// Start out with 0 connections to user services
	userServiceToLocalConnectionMap := map[string]*runningLocalServiceConnection{}

	closeGatewayFunc := func() {
		// Stop any port forwarding
		for _, runningLocalServiceConnection := range resultCoreGatewayServerService.userServiceGuidToLocalConnectionMap {
			runningLocalServiceConnection.kurtosisConnection.Stop()
		}
	}

	return &ApiContainerGatewayServiceServer{
		remoteApiContainerClient:            remoteApiContainerClient,
		connectionProvider:                  connectionProvider,
		mutex:                               &sync.Mutex{},
		userServiceGuidToLocalConnectionMap: userServiceToLocalConnectionMap,
		enclaveId:                           enclaveId,
	}, closeGatewayFunc
}

func (service *ApiContainerGatewayServiceServer) RunStarlarkScript(args *kurtosis_core_rpc_api_bindings.RunStarlarkScriptArgs, streamToWriteTo kurtosis_core_rpc_api_bindings.ApiContainerService_RunStarlarkScriptServer) error {
	logrus.Debug("Executing Starlark script")
	streamToReadFrom, err := service.remoteApiContainerClient.RunStarlarkScript(streamToWriteTo.Context(), args)
	if err != nil {
		return stacktrace.Propagate(err, "An error occurred starting the execution of Kurtosis code")
	}
	if err := forwardKurtosisExecutionStream[kurtosis_core_rpc_api_bindings.StarlarkRunResponseLine](streamToReadFrom, streamToWriteTo); err != nil {
		return stacktrace.Propagate(err, "Error forwarding stream from Kurtosis core back to the user")
	}
	return nil
}

func (service *ApiContainerGatewayServiceServer) ListFilesArtifactNamesAndUuids(ctx context.Context, _ *emptypb.Empty) (*kurtosis_core_rpc_api_bindings.ListFilesArtifactNamesAndUuidsResponse, error) {
	remoteApiContainerResponse, err := service.remoteApiContainerClient.ListFilesArtifactNamesAndUuids(ctx, &emptypb.Empty{})
	if err != nil {
		return nil, stacktrace.Propagate(err, errorCallingRemoteApiContainerFromGateway)
	}

	return remoteApiContainerResponse, nil
}

func (service *ApiContainerGatewayServiceServer) RunStarlarkPackage(args *kurtosis_core_rpc_api_bindings.RunStarlarkPackageArgs, streamToWriteTo kurtosis_core_rpc_api_bindings.ApiContainerService_RunStarlarkPackageServer) error {
	logrus.Debugf("Executing Starlark package '%s'", args.GetPackageId())
	streamToReadFrom, err := service.remoteApiContainerClient.RunStarlarkPackage(streamToWriteTo.Context(), args)
	if err != nil {
		return stacktrace.Propagate(err, "An error occurred starting the execution of Kurtosis code")
	}
	if err := forwardKurtosisExecutionStream[kurtosis_core_rpc_api_bindings.StarlarkRunResponseLine](streamToReadFrom, streamToWriteTo); err != nil {
		return stacktrace.Propagate(err, "Error forwarding stream from Kurtosis core back to the user while executing package '%s'", args.GetPackageId())
	}
	return nil
}

func (service *ApiContainerGatewayServiceServer) AddServices(ctx context.Context, args *kurtosis_core_rpc_api_bindings.AddServicesArgs) (*kurtosis_core_rpc_api_bindings.AddServicesResponse, error) {
	service.mutex.Lock()
	defer service.mutex.Unlock()
	failedServicesPool := map[string]string{}
	remoteApiContainerResponse, err := service.remoteApiContainerClient.AddServices(ctx, args)
	if err != nil {
		return nil, stacktrace.Propagate(err, errorCallingRemoteApiContainerFromGateway)
	}
	shouldRemoveServices := map[string]bool{}
	for serviceName := range remoteApiContainerResponse.GetSuccessfulServiceNameToServiceInfo() {
		shouldRemoveServices[serviceName] = true
	}
	defer func() {
		for serviceName := range shouldRemoveServices {
			removeServiceArgs := &kurtosis_core_rpc_api_bindings.RemoveServiceArgs{ServiceIdentifier: serviceName}
			if _, err := service.remoteApiContainerClient.RemoveService(ctx, removeServiceArgs); err != nil {
				err = stacktrace.Propagate(err,
					"Connecting to the service running in the remote cluster failed, expected to be able to cleanup the created service, but an error occurred calling the backend to remove the service we created. "+
						"ACTION REQUIRED: You'll need to manually remove the service with name '%v'", serviceName)
				failedServicesPool[serviceName] = err.Error()
			}
		}
	}()
	successfulServices := map[string]*kurtosis_core_rpc_api_bindings.ServiceInfo{}
	// Add failed services to failed services pool
	for serviceNameStr, errStr := range remoteApiContainerResponse.GetFailedServiceNameToError() {
		failedServicesPool[serviceNameStr] = errStr
	}

	// Write over the PublicIp and Public Ports fields so the service can be accessed through local port forwarding
	for serviceNameStr, serviceInfo := range remoteApiContainerResponse.GetSuccessfulServiceNameToServiceInfo() {
		if err := service.writeOverServiceInfoFieldsWithLocalConnectionInformation(serviceInfo); err != nil {
			err = stacktrace.Propagate(err, "Expected to be able to write over service info fields for service '%v', instead a non-nil error was returned", serviceNameStr)
			failedServicesPool[serviceNameStr] = err.Error()
		}
		successfulServices[serviceNameStr] = serviceInfo
	}

	// Do not remove successful services
	for serviceNameStr := range successfulServices {
		delete(shouldRemoveServices, serviceNameStr)
	}
	startServicesResp := binding_constructors.NewAddServicesResponse(successfulServices, failedServicesPool)
	return startServicesResp, nil
}

func (service *ApiContainerGatewayServiceServer) GetServices(ctx context.Context, args *kurtosis_core_rpc_api_bindings.GetServicesArgs) (*kurtosis_core_rpc_api_bindings.GetServicesResponse, error) {
	service.mutex.Lock()
	defer service.mutex.Unlock()
	remoteApiContainerResponse, err := service.remoteApiContainerClient.GetServices(ctx, args)
	if err != nil {
		return nil, stacktrace.Propagate(err, errorCallingRemoteApiContainerFromGateway)
	}
	for serviceId, serviceInfo := range remoteApiContainerResponse.ServiceInfo {
		if err := service.writeOverServiceInfoFieldsWithLocalConnectionInformation(serviceInfo); err != nil {
			return nil, stacktrace.Propagate(err, "Expected to be able to write over service info fields for service '%v', instead a non-nil error was returned", serviceId)
		}
	}

	return remoteApiContainerResponse, nil
}

func (service *ApiContainerGatewayServiceServer) GetExistingAndHistoricalServiceIdentifiers(ctx context.Context, args *emptypb.Empty) (*kurtosis_core_rpc_api_bindings.GetExistingAndHistoricalServiceIdentifiersResponse, error) {
	service.mutex.Lock()
	defer service.mutex.Unlock()
	remoteApiContainerResponse, err := service.remoteApiContainerClient.GetExistingAndHistoricalServiceIdentifiers(ctx, args)
	if err != nil {
		return nil, stacktrace.Propagate(err, errorCallingRemoteApiContainerFromGateway)
	}

	return remoteApiContainerResponse, nil
}

func (service *ApiContainerGatewayServiceServer) RemoveService(ctx context.Context, args *kurtosis_core_rpc_api_bindings.RemoveServiceArgs) (*kurtosis_core_rpc_api_bindings.RemoveServiceResponse, error) {
	service.mutex.Lock()
	defer service.mutex.Unlock()
	remoteApiContainerResponse, err := service.remoteApiContainerClient.RemoveService(ctx, args)
	if err != nil {
		return nil, stacktrace.Propagate(err, errorCallingRemoteApiContainerFromGateway)
	}

	removedServiceUuid := remoteApiContainerResponse.GetServiceUuid()
	// Kill the connection if we can
	service.idempotentKillRunningConnectionForServiceGuid(removedServiceUuid)

	return remoteApiContainerResponse, nil
}
func (service *ApiContainerGatewayServiceServer) Repartition(ctx context.Context, args *kurtosis_core_rpc_api_bindings.RepartitionArgs) (*emptypb.Empty, error) {
	remoteApiContainerResponse, err := service.remoteApiContainerClient.Repartition(ctx, args)
	if err != nil {
		return nil, stacktrace.Propagate(err, errorCallingRemoteApiContainerFromGateway)
	}

	return remoteApiContainerResponse, nil
}
func (service *ApiContainerGatewayServiceServer) ExecCommand(ctx context.Context, args *kurtosis_core_rpc_api_bindings.ExecCommandArgs) (*kurtosis_core_rpc_api_bindings.ExecCommandResponse, error) {
	remoteApiContainerResponse, err := service.remoteApiContainerClient.ExecCommand(ctx, args)
	if err != nil {
		return nil, stacktrace.Propagate(err, errorCallingRemoteApiContainerFromGateway)
	}

	return remoteApiContainerResponse, nil
}

func (service *ApiContainerGatewayServiceServer) WaitForHttpGetEndpointAvailability(ctx context.Context, args *kurtosis_core_rpc_api_bindings.WaitForHttpGetEndpointAvailabilityArgs) (*emptypb.Empty, error) {
	remoteApiContainerResponse, err := service.remoteApiContainerClient.WaitForHttpGetEndpointAvailability(ctx, args)
	if err != nil {
		return nil, stacktrace.Propagate(err, errorCallingRemoteApiContainerFromGateway)
	}

	return remoteApiContainerResponse, nil
}
func (service *ApiContainerGatewayServiceServer) WaitForHttpPostEndpointAvailability(ctx context.Context, args *kurtosis_core_rpc_api_bindings.WaitForHttpPostEndpointAvailabilityArgs) (*emptypb.Empty, error) {
	remoteApiContainerResponse, err := service.remoteApiContainerClient.WaitForHttpPostEndpointAvailability(ctx, args)
	if err != nil {
		return nil, stacktrace.Propagate(err, errorCallingRemoteApiContainerFromGateway)
	}

	return remoteApiContainerResponse, nil
}

func (service *ApiContainerGatewayServiceServer) UploadFilesArtifact(ctx context.Context, args *kurtosis_core_rpc_api_bindings.UploadFilesArtifactArgs) (*kurtosis_core_rpc_api_bindings.UploadFilesArtifactResponse, error) {
	remoteApiContainerResponse, err := service.remoteApiContainerClient.UploadFilesArtifact(ctx, args)
	if err != nil {
		return nil, stacktrace.Propagate(err, errorCallingRemoteApiContainerFromGateway)
	}

	return remoteApiContainerResponse, nil
}

func (service *ApiContainerGatewayServiceServer) UploadFilesArtifactV2(server kurtosis_core_rpc_api_bindings.ApiContainerService_UploadFilesArtifactV2Server) error {
	client, err := service.remoteApiContainerClient.UploadFilesArtifactV2(server.Context())
	if err != nil {
		return stacktrace.Propagate(err, errorCallingRemoteApiContainerFromGateway)
	}
	if err := forwardDataChunkStreamWithClose[*kurtosis_core_rpc_api_bindings.UploadFilesArtifactResponse](server, client); err != nil {
		return stacktrace.Propagate(err, "Error forwarding stream from UploadFilesArtifactV2 on gateway")
	}
	return nil
}

func (service *ApiContainerGatewayServiceServer) StoreWebFilesArtifact(ctx context.Context, args *kurtosis_core_rpc_api_bindings.StoreWebFilesArtifactArgs) (*kurtosis_core_rpc_api_bindings.StoreWebFilesArtifactResponse, error) {
	remoteApiContainerResponse, err := service.remoteApiContainerClient.StoreWebFilesArtifact(ctx, args)
	if err != nil {
		return nil, stacktrace.Propagate(err, errorCallingRemoteApiContainerFromGateway)
	}

	return remoteApiContainerResponse, nil
}
func (service *ApiContainerGatewayServiceServer) StoreFilesArtifactFromService(ctx context.Context, args *kurtosis_core_rpc_api_bindings.StoreFilesArtifactFromServiceArgs) (*kurtosis_core_rpc_api_bindings.StoreFilesArtifactFromServiceResponse, error) {
	remoteApiContainerResponse, err := service.remoteApiContainerClient.StoreFilesArtifactFromService(ctx, args)
	if err != nil {
		return nil, stacktrace.Propagate(err, errorCallingRemoteApiContainerFromGateway)
	}

	return remoteApiContainerResponse, nil
}

func (service *ApiContainerGatewayServiceServer) DownloadFilesArtifact(ctx context.Context, args *kurtosis_core_rpc_api_bindings.DownloadFilesArtifactArgs) (*kurtosis_core_rpc_api_bindings.DownloadFilesArtifactResponse, error) {
	remoteApiContainerResponse, err := service.remoteApiContainerClient.DownloadFilesArtifact(ctx, args)
	if err != nil {
		return nil, stacktrace.Propagate(err, errorCallingRemoteApiContainerFromGateway)
	}

	return remoteApiContainerResponse, nil
}

func (service *ApiContainerGatewayServiceServer) DownloadFilesArtifactV2(args *kurtosis_core_rpc_api_bindings.DownloadFilesArtifactArgs, server kurtosis_core_rpc_api_bindings.ApiContainerService_DownloadFilesArtifactV2Server) error {
	client, err := service.remoteApiContainerClient.DownloadFilesArtifactV2(server.Context(), args)
	if err != nil {
		return stacktrace.Propagate(err, errorCallingRemoteApiContainerFromGateway)
	}
	if err := forwardDataChunkStream(client, server); err != nil {
		return stacktrace.Propagate(err, "Error forwarding stream from DownloadFilesArtifactV2 on gateway")
	}
	return nil
}

func (service *ApiContainerGatewayServiceServer) PauseService(ctx context.Context, args *kurtosis_core_rpc_api_bindings.PauseServiceArgs) (*emptypb.Empty, error) {
	remoteApiContainerResponse, err := service.remoteApiContainerClient.PauseService(ctx, args)
	if err != nil {
		return nil, stacktrace.Propagate(err, errorCallingRemoteApiContainerFromGateway)
	}

	return remoteApiContainerResponse, nil
}
func (service *ApiContainerGatewayServiceServer) UnpauseService(ctx context.Context, args *kurtosis_core_rpc_api_bindings.UnpauseServiceArgs) (*emptypb.Empty, error) {
	remoteApiContainerResponse, err := service.remoteApiContainerClient.UnpauseService(ctx, args)
	if err != nil {
		return nil, stacktrace.Propagate(err, errorCallingRemoteApiContainerFromGateway)
	}

	return remoteApiContainerResponse, nil
}

func (service *ApiContainerGatewayServiceServer) RenderTemplatesToFilesArtifact(ctx context.Context, args *kurtosis_core_rpc_api_bindings.RenderTemplatesToFilesArtifactArgs) (*kurtosis_core_rpc_api_bindings.RenderTemplatesToFilesArtifactResponse, error) {
	remoteApiContainerResponse, err := service.remoteApiContainerClient.RenderTemplatesToFilesArtifact(ctx, args)
	if err != nil {
		return nil, stacktrace.Propagate(err, errorCallingRemoteApiContainerFromGateway)
	}

	return remoteApiContainerResponse, nil
}

func (service *ApiContainerGatewayServiceServer) UploadStarlarkPackage(server kurtosis_core_rpc_api_bindings.ApiContainerService_UploadStarlarkPackageServer) error {
	client, err := service.remoteApiContainerClient.UploadStarlarkPackage(server.Context())
	if err != nil {
		return stacktrace.Propagate(err, errorCallingRemoteApiContainerFromGateway)
	}
	if err := forwardDataChunkStreamWithClose[*emptypb.Empty](server, client); err != nil {
		return stacktrace.Propagate(err, "Error forwarding stream from UploadStarlarkPackage on gateway")
	}
	return nil
}

// ====================================================================================================
//
//	Private helper methods
//
// ====================================================================================================

// writeOverServiceInfoFieldsWithLocalConnectionInformation overwites the `MaybePublicPorts` and `MaybePublicIpAdrr` fields to connect to local ports forwarding requests to private ports in Kubernetes
// Only TCP Private Ports are forwarded
func (service *ApiContainerGatewayServiceServer) writeOverServiceInfoFieldsWithLocalConnectionInformation(serviceInfo *kurtosis_core_rpc_api_bindings.ServiceInfo) error {
	// If the service has no private ports, then don't overwrite any of the service info fields
	if len(serviceInfo.PrivatePorts) == 0 {
		return nil
	}

	serviceUuid := serviceInfo.GetServiceUuid()
	var localConnErr error
	var runningLocalConnection *runningLocalServiceConnection
	cleanUpConnection := true
	runningLocalConnection, isFound := service.userServiceGuidToLocalConnectionMap[serviceUuid]
	if !isFound {
		runningLocalConnection, localConnErr = service.startRunningConnectionForKurtosisService(serviceUuid, serviceInfo.PrivatePorts)
		if localConnErr != nil {
			return stacktrace.Propagate(localConnErr, "Expected to be able to start a local connection to Kurtosis service '%v', instead a non-nil error was returned", serviceUuid)
		}
		defer func() {
			if cleanUpConnection {
				service.idempotentKillRunningConnectionForServiceGuid(serviceUuid)
			}
		}()
	}
	serviceInfo.MaybePublicPorts = runningLocalConnection.localPublicServicePorts
	serviceInfo.MaybePublicIpAddr = runningLocalConnection.localPublicIp

	cleanUpConnection = false
	return nil
}

// startRunningConnectionForKurtosisService starts a port forwarding process from kernel assigned local ports to the remote service ports specified
// If privatePortsFromApi is empty, an error is thrown
func (service *ApiContainerGatewayServiceServer) startRunningConnectionForKurtosisService(serviceUuid string, privatePortsFromApi map[string]*kurtosis_core_rpc_api_bindings.Port) (*runningLocalServiceConnection, error) {
	if len(privatePortsFromApi) == 0 {
		return nil, stacktrace.NewError("Expected Kurtosis service to have private ports specified for port forwarding, instead no ports were provided")
	}
	remotePrivatePortSpecs := map[string]*port_spec.PortSpec{}
	for portSpecId, coreApiPort := range privatePortsFromApi {
		if coreApiPort.GetTransportProtocol() != kurtosis_core_rpc_api_bindings.Port_TCP {
			logrus.Warnf(
				"Will not be able to forward service port with id '%v' for service with guid '%v' in enclave '%v'. "+
					"The protocol of this port is '%v', but only '%v' is supported",
				portSpecId,
				serviceUuid,
				service.enclaveId,
				coreApiPort.GetTransportProtocol(),
				kurtosis_core_rpc_api_bindings.Port_TCP.String(),
			)
			continue
		}
		portNumberUint16 := uint16(coreApiPort.GetNumber())
		remotePortSpec, err := port_spec.NewPortSpec(portNumberUint16, port_spec.TransportProtocol_TCP, coreApiPort.GetMaybeApplicationProtocol(), nil)
		if err != nil {
			return nil, stacktrace.Propagate(err, "Expected to be able to create port spec describing remote port '%v', instead a non-nil error was returned", portSpecId)
		}
		remotePrivatePortSpecs[portSpecId] = remotePortSpec
	}

	// Start listening
	serviceConnection, err := service.connectionProvider.ForUserService(service.enclaveId, serviceUuid, remotePrivatePortSpecs)
	if err != nil {
		return nil, stacktrace.Propagate(err, "Expected to be able to start a local connection service with guid '%v' in enclave '%v', instead a non-nil error was returned", serviceUuid, service.enclaveId)
	}
	cleanUpConnection := true
	defer func() {
		if cleanUpConnection {
			serviceConnection.Stop()
		}
	}()

	localPublicApiPorts := map[string]*kurtosis_core_rpc_api_bindings.Port{}
	for portId, privateApiPort := range privatePortsFromApi {
		localPortSpec, found := serviceConnection.GetLocalPorts()[portId]
		// Skip the private remote port if no public local port is forwarding to it
		if !found {
			continue
		}
		localPublicApiPorts[portId] = &kurtosis_core_rpc_api_bindings.Port{
			Number:                   uint32(localPortSpec.GetNumber()),
			TransportProtocol:        privateApiPort.GetTransportProtocol(),
			MaybeApplicationProtocol: privateApiPort.GetMaybeApplicationProtocol(),
			MaybeWaitTimeout:         privateApiPort.GetMaybeWaitTimeout(),
		}
	}

	runingLocalServiceConnection := &runningLocalServiceConnection{
		kurtosisConnection:      serviceConnection,
		localPublicServicePorts: localPublicApiPorts,
		localPublicIp:           localHostIpStr,
	}

	// Store information about our running gateway
	service.userServiceGuidToLocalConnectionMap[serviceUuid] = runingLocalServiceConnection
	cleanUpMapEntry := true
	defer func() {
		if cleanUpMapEntry {
			delete(service.userServiceGuidToLocalConnectionMap, serviceUuid)
		}
	}()
	
	go func() {
		// Wait on closed connection and remove the service entry from the user service to local connection map
		<- runingLocalServiceConnection.kurtosisConnection.GetClosedChannel()
		delete(service.userServiceGuidToLocalConnectionMap, serviceUuid)
		logrus.Debugf("Remove service with guid '%v' from the user service to local connection map", serviceUuid)
	}()

	cleanUpMapEntry = false
	cleanUpConnection = false
	return runingLocalServiceConnection, nil
}

func (service *ApiContainerGatewayServiceServer) idempotentKillRunningConnectionForServiceGuid(serviceUuid string) {
	runningLocalConnection, isRunning := service.userServiceGuidToLocalConnectionMap[serviceUuid]
	// Nothing running, nothing to kill
	if !isRunning {
		return
	}

	// Close up the connection
	runningLocalConnection.kurtosisConnection.Stop()
	// delete the entry for the serve
	delete(service.userServiceGuidToLocalConnectionMap, serviceUuid)
}

func forwardKurtosisExecutionStream[T any](streamToReadFrom grpc.ClientStream, streamToWriteTo grpc.ServerStream) error {
	for {
		starlarkRunResponseLine := new(T)
		// RecvMsg blocks until either a message is received or an error is thrown
		readErr := streamToReadFrom.RecvMsg(starlarkRunResponseLine)
		if readErr == io.EOF {
			logrus.Debug("Finished reading from the Kurtosis response line stream.")
			return nil
		}
		if readErr != nil {
			return stacktrace.Propagate(readErr, "Error reading Kurtosis execution lines from Kurtosis core stream")
		}

		if writeErr := streamToWriteTo.SendMsg(starlarkRunResponseLine); writeErr != nil {
			return stacktrace.Propagate(readErr, "Received a Kurtosis execution line but failed forwarding it back to the user")
		}
	}
}

type dataChunkStreamReceiver interface {
	Recv() (*kurtosis_core_rpc_api_bindings.StreamedDataChunk, error)
}

type dataChunkStreamSenderCloserAndReceiver[T any] interface {
	dataChunkStreamSender
	CloseAndRecv() (T, error)
}

type dataChunkStreamSender interface {
	Send(*kurtosis_core_rpc_api_bindings.StreamedDataChunk) error
}

type dataChunkStreamReceiverSenderAndCloser[T any] interface {
	dataChunkStreamReceiver
	SendAndClose(T) error
}

func forwardDataChunkStream[T dataChunkStreamReceiver, U dataChunkStreamSender](streamToReadFrom T, streamToWriteTo U) error {
	for {
		dataChunk, readErr := streamToReadFrom.Recv()
		if readErr == io.EOF {
			logrus.Debug("Finished reading from the Kurtosis response line stream.")
			return nil
		}
		if readErr != nil {
			return stacktrace.Propagate(readErr, "Error reading Kurtosis execution lines from Kurtosis core stream")
		}
		if writeErr := streamToWriteTo.Send(dataChunk); writeErr != nil {
			return stacktrace.Propagate(readErr, "Received a Kurtosis execution line but failed forwarding it back to the user")
		}
	}
}

func forwardDataChunkStreamWithClose[T any, R dataChunkStreamReceiverSenderAndCloser[T], W dataChunkStreamSenderCloserAndReceiver[T]](streamToReadFrom R, streamToWriteTo W) error {
	err := forwardDataChunkStream(streamToReadFrom, streamToWriteTo)
	if err != nil {
		return err
	}
	uploadResponse, closeErr := streamToWriteTo.CloseAndRecv()
	if closeErr != nil {
		return stacktrace.Propagate(closeErr, "Error during Kurtosis closing upload client")
	}
	closeErr = streamToReadFrom.SendAndClose(uploadResponse)
	if closeErr != nil {
		return stacktrace.Propagate(closeErr, "Error during Kurtosis closing upload server")
	}
	return nil
}
