package user_services_functions

import (
	"context"
	"github.com/kurtosis-tech/kurtosis/container-engine-lib/lib/backend_impls/kubernetes/kubernetes_kurtosis_backend/shared_helpers"
	"github.com/kurtosis-tech/kurtosis/container-engine-lib/lib/backend_impls/kubernetes/kubernetes_manager"
	"github.com/kurtosis-tech/kurtosis/container-engine-lib/lib/backend_interface/objects/enclave"
	"github.com/kurtosis-tech/kurtosis/container-engine-lib/lib/backend_interface/objects/service"
	"github.com/kurtosis-tech/stacktrace"
	//applyconfigurationsv1 "k8s.io/client-go/applyconfigurations/core/v1"
)

func StopUserServices(
	ctx context.Context,
	enclaveId enclave.EnclaveUUID,
	filters *service.ServiceFilters,
	cliModeArgs *shared_helpers.CliModeArgs,
	apiContainerModeArgs *shared_helpers.ApiContainerModeArgs,
	engineServerModeArgs *shared_helpers.EngineServerModeArgs,
	kubernetesManager *kubernetes_manager.KubernetesManager) (resultSuccessfulUuids map[service.ServiceUUID]bool, resultErroredUuids map[service.ServiceUUID]error, resultErr error) {
	namespaceName, err := shared_helpers.GetEnclaveNamespaceName(ctx, enclaveId, cliModeArgs, apiContainerModeArgs, engineServerModeArgs, kubernetesManager)
	if err != nil {
		return nil, nil, stacktrace.Propagate(err, "An error occurred getting namespace name for enclave '%v'", enclaveId)
	}

	allObjectsAndResources, err := shared_helpers.GetMatchingUserServiceObjectsAndKubernetesResources(ctx, enclaveId, filters, cliModeArgs, apiContainerModeArgs, engineServerModeArgs, kubernetesManager)
	if err != nil {
		return nil, nil, stacktrace.Propagate(err, "An error occurred getting user services in enclave '%v' matching filters: %+v", enclaveId, filters)
	}

	successfulUuids := map[service.ServiceUUID]bool{}
	erroredUuids := map[service.ServiceUUID]error{}
	for serviceUuid, serviceObjsAndResources := range allObjectsAndResources {
		resources := serviceObjsAndResources.KubernetesResources

		pod := resources.Pod
		if pod != nil {
			if err := kubernetesManager.RemovePod(ctx, pod); err != nil {
				erroredUuids[serviceUuid] = stacktrace.Propagate(
					err,
					"An error occurred removing Kubernetes pod '%v' in namespace '%v'",
					pod.Name,
					namespaceName,
				)
				continue
			}
		}

		/*kubernetesService := resources.Service
		serviceName := kubernetesService.Name
		updateConfigurator := func(updatesToApply *applyconfigurationsv1.ServiceApplyConfiguration) {
			specUpdates := applyconfigurationsv1.ServiceSpec().WithSelector(nil)
			updatesToApply.WithSpec(specUpdates)
		}
		if _, err := kubernetesManager.UpdateService(ctx, namespaceName, serviceName, updateConfigurator); err != nil {
			erroredUuids[serviceUuid] = stacktrace.Propagate(
				err,
				"An error occurred updating service '%v' in namespace '%v' to reflect that it's no longer running",
				serviceName,
				namespaceName,
			)
			continue
		}*/

		successfulUuids[serviceUuid] = true
	}
	return successfulUuids, erroredUuids, nil
}
