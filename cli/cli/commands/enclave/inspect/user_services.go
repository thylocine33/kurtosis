package inspect

import (
	"context"
	"fmt"
	"github.com/kurtosis-tech/container-engine-lib/lib/docker_manager"
	"github.com/kurtosis-tech/container-engine-lib/lib/docker_manager/types"
	"github.com/kurtosis-tech/kurtosis-core/commons/enclave_object_labels"
	"github.com/palantir/stacktrace"
)

const (
	userServiceGUIDColHeader                    = "GUID"
	userServiceNameColHeader                    = "Name"
	userServiceHostMachinePortBindingsColHeader = "LocalPortBindings"
)

func printUserServices(ctx context.Context, dockerManager *docker_manager.DockerManager, enclaveId string) error {
	userServiceLabels := getLabelsForListEnclaveUserServices(enclaveId)

	containers, err := dockerManager.GetContainersByLabels(ctx, userServiceLabels, true)
	if err != nil {
		return stacktrace.Propagate(err, "An error occurred getting user service containers by labels: '%+v'", userServiceLabels)
	}

	tabWriter := getTabWriterForPrinting()
	writeElemsToTabWriter(tabWriter, userServiceGUIDColHeader, userServiceNameColHeader, userServiceHostMachinePortBindingsColHeader)
	sortedContainers, err := getContainersSortedByGUID(containers)
	if err != nil {
			  return stacktrace.Propagate(err, "An error occurred sorting user service containers by GUID")
			  }
	for _, container := range sortedContainers {
		containerGuid, found := container.GetLabels()[enclave_object_labels.GUIDLabel]
		if !found {
			return stacktrace.NewError("No '%v' container label was found in container ID '%v' with labels '%+v'", enclave_object_labels.GUIDLabel, container.GetId(), container.GetLabels())
		}
		hostPortBindingsStrings := getContainerHostPortBindingStrings(container)

		var firstHostPortBinding string
		if hostPortBindingsStrings != nil  {
			firstHostPortBinding = hostPortBindingsStrings[0]
			hostPortBindingsStrings = hostPortBindingsStrings[1:]
		}
		writeElemsToTabWriter(tabWriter, containerGuid, container.GetName(), firstHostPortBinding)

		for _, hostPortBindingsString := range hostPortBindingsStrings {
			writeElemsToTabWriter(tabWriter, "", "", hostPortBindingsString)
		}
	}
	tabWriter.Flush()

	return nil
}

func getContainerHostPortBindingStrings(container *types.Container) []string {
	var allHosPortBindings []string
	hostPortBindings := container.GetHostPortBindings()
	for hostPortBindingKey, hostPortBinding := range hostPortBindings {
		hostPortBindingString := fmt.Sprintf("%v -> %v:%v", hostPortBindingKey, hostPortBinding.HostIP, hostPortBinding.HostPort)
		allHosPortBindings = append(allHosPortBindings, hostPortBindingString)
	}
	return allHosPortBindings
}

func getLabelsForListEnclaveUserServices(enclaveId string) map[string]string {
	labels := map[string]string{}
	labels[enclave_object_labels.ContainerTypeLabel] = enclave_object_labels.ContainerTypeUserServiceContainer
	labels[enclave_object_labels.EnclaveIDContainerLabel] = enclaveId
	return labels
}

