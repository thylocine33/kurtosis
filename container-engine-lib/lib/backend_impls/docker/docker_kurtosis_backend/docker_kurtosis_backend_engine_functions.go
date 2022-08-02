package docker_kurtosis_backend

import (
	"context"
	"fmt"
	"github.com/docker/go-connections/nat"
	"github.com/kurtosis-tech/container-engine-lib/lib/backend_impls/docker/docker_manager"
	"github.com/kurtosis-tech/container-engine-lib/lib/backend_impls/docker/docker_manager/types"
	"github.com/kurtosis-tech/container-engine-lib/lib/backend_impls/docker/docker_operation_parallelizer"
	"github.com/kurtosis-tech/container-engine-lib/lib/backend_impls/docker/object_attributes_provider/docker_port_spec_serializer"
	"github.com/kurtosis-tech/container-engine-lib/lib/backend_impls/docker/object_attributes_provider/label_key_consts"
	"github.com/kurtosis-tech/container-engine-lib/lib/backend_impls/docker/object_attributes_provider/label_value_consts"
	"github.com/kurtosis-tech/container-engine-lib/lib/backend_interface/objects/container_status"
	"github.com/kurtosis-tech/container-engine-lib/lib/backend_interface/objects/engine"
	"github.com/kurtosis-tech/container-engine-lib/lib/backend_interface/objects/port_spec"
	"github.com/kurtosis-tech/container-engine-lib/lib/uuid_generator"
	"github.com/kurtosis-tech/stacktrace"
	"github.com/sirupsen/logrus"
	"net"
	"strconv"
	"strings"
	"time"
)

const (
	// This needs to be bind-mounted into the engine & API containers so they can manipulate Docker
	dockerSocketFilepath = "/var/run/sock"

	nameOfNetworkToStartEngineContainerIn = "bridge"

	// The engine server uses gRPC so MUST listen on TCP (no other protocols are supported), which also
	// means that its grpc-proxy must listen on TCP
	enginePortProtocol          = port_spec.PortProtocol_TCP

	maxWaitForEngineAvailabilityRetries         = 10
	timeBetweenWaitForEngineAvailabilityRetries = 1 * time.Second

	// We leave a relatively short timeout so that the engine gets a chance to gracefully clean up, but the
	// user isn't stuck waiting on a long-running operation when they tell the engine to stop
	engineStopTimeout = 1 * time.Second
)

// TODO: MIGRATE THIS FOLDER TO USE STRUCTURE OF USER_SERVICE_FUNCTIONS MODULE

// ====================================================================================================
//                                     Engine CRUD Methods
// ====================================================================================================

func (backend *DockerKurtosisBackend) CreateEngine(
	ctx context.Context,
	imageOrgAndRepo string,
	imageVersionTag string,
	grpcPortNum uint16,
	grpcProxyPortNum uint16,
	envVars map[string]string,
) (
	*engine.Engine,
	error,
) {
	matchingNetworks, err := backend.dockerManager.GetNetworksByName(ctx, nameOfNetworkToStartEngineContainerIn)
	if err != nil {
		return nil, stacktrace.Propagate(
			err,
			"An error occurred getting networks matching the network we want to start the engine in, '%v'",
			nameOfNetworkToStartEngineContainerIn,
		)
	}
	numMatchingNetworks := len(matchingNetworks)
	if numMatchingNetworks == 0 && numMatchingNetworks > 1 {
		return nil, stacktrace.NewError(
			"Expected exactly one network matching the name of the network that we want to start the engine in, '%v', but got %v",
			nameOfNetworkToStartEngineContainerIn,
			numMatchingNetworks,
		)
	}
	targetNetwork := matchingNetworks[0]
	targetNetworkId := targetNetwork.GetId()

	engineGuidStr, err := uuid_generator.GenerateUUIDString()
	if err != nil {
		return nil, stacktrace.Propagate(err, "An error occurred generating a UUID string for the engine")
	}
	engineGuid := engine.EngineGUID(engineGuidStr)

	privateGrpcPortSpec, err := port_spec.NewPortSpec(grpcPortNum, enginePortProtocol)
	if err != nil {
		return nil, stacktrace.Propagate(
			err,
			"An error occurred creating the engine's private grpc port spec object using number '%v' and protocol '%v'",
			grpcPortNum,
			enginePortProtocol.String(),
		)
	}
	privateGrpcProxyPortSpec, err := port_spec.NewPortSpec(grpcProxyPortNum, enginePortProtocol)
	if err != nil {
		return nil, stacktrace.Propagate(
			err,
			"An error occurred creating the engine's private grpc proxy port spec object using number '%v' and protocol '%v'",
			grpcProxyPortNum,
			enginePortProtocol.String(),
		)
	}

	engineAttrs, err := backend.objAttrsProvider.ForEngineServer(
		engineGuid,
		kurtosisInternalContainerGrpcPortId,
		privateGrpcPortSpec,
		kurtosisInternalContainerGrpcProxyPortId,
		privateGrpcProxyPortSpec,
	)
	if err != nil {
		return nil, stacktrace.Propagate(
			err,
			"An error occurred getting the engine server container attributes using GUID '%v', grpc port num '%v', and " +
				"grpc proxy port num '%v'",
			engineGuid,
			grpcPortNum,
			grpcProxyPortNum,
		)
	}

	privateGrpcDockerPort, err := transformPortSpecToDockerPort(privateGrpcPortSpec)
	if err != nil {
		return nil, stacktrace.Propagate(err, "An error occurred transforming the private grpc port spec to a Docker port")
	}
	privateGrpcProxyDockerPort, err := transformPortSpecToDockerPort(privateGrpcProxyPortSpec)
	if err != nil {
		return nil, stacktrace.Propagate(err, "An error occurred transforming the private grpc proxy port spec to a Docker port")
	}

	usedPorts := map[nat.Port]docker_manager.PortPublishSpec{
		privateGrpcDockerPort:      docker_manager.NewManualPublishingSpec(grpcPortNum),
		privateGrpcProxyDockerPort: docker_manager.NewManualPublishingSpec(grpcProxyPortNum),
	}

	bindMounts := map[string]string{
		// Necessary so that the engine server can interact with the Docker engine
		dockerSocketFilepath: dockerSocketFilepath,
	}

	containerImageAndTag := fmt.Sprintf(
		"%v:%v",
		imageOrgAndRepo,
		imageVersionTag,
	)

	labelStrs := map[string]string{}
	for labelKey, labelValue := range engineAttrs.GetLabels() {
		labelStrs[labelKey.GetString()] = labelValue.GetString()
	}

	createAndStartArgs := docker_manager.NewCreateAndStartContainerArgsBuilder(
		containerImageAndTag,
		engineAttrs.GetName().GetString(),
		targetNetworkId,
	).WithEnvironmentVariables(
		envVars,
	).WithBindMounts(
		bindMounts,
	).WithUsedPorts(
		usedPorts,
	).WithLabels(
		labelStrs,
	).Build()

	// Best-effort pull attempt
	if err = backend.dockerManager.PullImage(ctx, containerImageAndTag); err != nil {
		logrus.Warnf("Failed to pull the latest version of engine server image '%v'; you may be running an out-of-date version", containerImageAndTag)
	}

	containerId, hostMachinePortBindings, err := backend.dockerManager.CreateAndStartContainer(ctx, createAndStartArgs)
	if err != nil {
		return nil, stacktrace.Propagate(err, "An error occurred starting the Kurtosis engine container")
	}
	shouldKillEngineContainer := true
	defer func() {
		if shouldKillEngineContainer {
			// NOTE: We use the background context here so that the kill will still go off even if the reason for
			// the failure was the original context being cancelled
			if err := backend.dockerManager.KillContainer(context.Background(), containerId); err != nil {
				logrus.Errorf(
					"Launching the engine server with GUID '%v' and container GUID '%v' didn't complete successfully so we " +
						"tried to kill the container we started, but doing so exited with an error:\n%v",
					engineGuid,
					containerId,
					err)
				logrus.Errorf("ACTION REQUIRED: You'll need to manually stop engine server with GUID '%v'!!!!!!", engineGuid)
			}
		}
	}()

	if err := waitForPortAvailabilityUsingNetstat(
		ctx,
		backend.dockerManager,
		containerId,
		privateGrpcPortSpec,
		maxWaitForEngineAvailabilityRetries,
		timeBetweenWaitForEngineAvailabilityRetries,
	); err != nil {
		return nil, stacktrace.Propagate(err, "An error occurred waiting for the engine server's grpc port to become available")
	}

	// TODO UNCOMMENT THIS ONCE WE HAVE GRPC-PROXY WIRED UP!!
	/*
	if err := waitForPortAvailabilityUsingNetstat(ctx, backend.dockerManager, containerId, grpcProxyPortNum); err != nil {
		return nil, stacktrace.Propagate(err, "An error occurred waiting for the engine server's grpc proxy port to become available")
	}
	 */

	result, err := getEngineObjectFromContainerInfo(containerId, labelStrs, types.ContainerStatus_Running, hostMachinePortBindings)
	if err != nil {
		return nil, stacktrace.Propagate(err, "An error occurred creating an engine object from container with GUID '%v'", containerId)
	}

	shouldKillEngineContainer = false
	return result, nil
}

func (backend *DockerKurtosisBackend) GetEngines(ctx context.Context, filters *engine.EngineFilters) (map[engine.EngineGUID]*engine.Engine, error) {
	matchingEngines, err := backend.getMatchingEngines(ctx, filters)
	if err != nil {
		return nil, stacktrace.Propagate(err, "An error occurred getting engines matching the following filters: %+v", filters)
	}

	matchingEnginesByEngineGuid := map[engine.EngineGUID]*engine.Engine{}
	for _, engineObj := range matchingEngines {
		matchingEnginesByEngineGuid[engineObj.GetGUID()] = engineObj
	}

	return matchingEnginesByEngineGuid, nil
}

func (backend *DockerKurtosisBackend) StopEngines(
	ctx context.Context,
	filters *engine.EngineFilters,
) (
	resultSuccessfulEngineGuids map[engine.EngineGUID]bool,
	resultErroredEngineGuids map[engine.EngineGUID]error,
	resultErr error,
) {
	matchingEnginesByContainerId, err := backend.getMatchingEngines(ctx, filters)
	if err != nil {
		return nil, nil, stacktrace.Propagate(err, "An error occurred getting engines matching filters '%+v'", filters)
	}

	// TODO PLEAAASE GO GENERICS... but we can't use 1.18 yet because it'll break all Kurtosis clients :(
	matchingUncastedEnginesByContainerId := map[string]interface{}{}
	for containerId, engineObj := range matchingEnginesByContainerId {
		matchingUncastedEnginesByContainerId[containerId] = interface{}(engineObj)
	}

	var killEngineOperation docker_operation_parallelizer.DockerOperation = func(
		ctx context.Context,
		dockerManager *docker_manager.DockerManager,
		dockerObjectId string,
	) error {
		if err := dockerManager.KillContainer(ctx, dockerObjectId); err != nil {
			return stacktrace.Propagate(err, "An error occurred killing engine container with GUID '%v'", dockerObjectId)
		}
		return nil
	}

	successfulEngineGuidStrs, erroredEngineGuidStrs, err := docker_operation_parallelizer.RunDockerOperationInParallelForKurtosisObjects(
		ctx,
		matchingUncastedEnginesByContainerId,
		backend.dockerManager,
		extractEngineGuidFromUncastedEngineObj,
		killEngineOperation,
	)
	if err != nil {
		return nil, nil, stacktrace.Propagate(err, "An error occurred killing engine containers matching filters '%+v'", filters)
	}

	successfulGuids := map[engine.EngineGUID]bool{}
	for guidStr := range successfulEngineGuidStrs {
		successfulGuids[engine.EngineGUID(guidStr)] = true
	}

	erroredGuids := map[engine.EngineGUID]error{}
	for guidStr, err := range erroredEngineGuidStrs {
		erroredGuids[engine.EngineGUID(guidStr)] = stacktrace.Propagate(
			err,
			"An error occurred stopping engine '%v'",
			guidStr,
		)
	}

	return successfulGuids, erroredGuids, nil
}

func (backend *DockerKurtosisBackend) DestroyEngines(
	ctx context.Context,
	filters *engine.EngineFilters,
) (
	resultSuccessfulEngineGuids map[engine.EngineGUID]bool,
	resultErroredEngineGuids map[engine.EngineGUID]error,
	resultErr error,
) {
	matchingEnginesByContainerId, err := backend.getMatchingEngines(ctx, filters)
	if err != nil {
		return nil, nil, stacktrace.Propagate(err, "An error occurred getting engines matching the following filters: %+v", filters)
	}

	// TODO PLEAAASE GO GENERICS... but we can't use 1.18 yet because it'll break all Kurtosis clients :(
	matchingUncastedEnginesByContainerId := map[string]interface{}{}
	for containerId, engineObj := range matchingEnginesByContainerId {
		matchingUncastedEnginesByContainerId[containerId] = interface{}(engineObj)
	}

	var removeEngineOperation docker_operation_parallelizer.DockerOperation = func(
		ctx context.Context,
		dockerManager *docker_manager.DockerManager,
		dockerObjectId string,
	) error {
		if err := dockerManager.RemoveContainer(ctx, dockerObjectId); err != nil {
			return stacktrace.Propagate(err, "An error occurred removing engine container with GUID '%v'", dockerObjectId)
		}
		return nil
	}

	successfulEngineGuidStrs, erroredEngineGuidStrs, err := docker_operation_parallelizer.RunDockerOperationInParallelForKurtosisObjects(
		ctx,
		matchingUncastedEnginesByContainerId,
		backend.dockerManager,
		extractEngineGuidFromUncastedEngineObj,
		removeEngineOperation,
	)
	if err != nil {
		return nil, nil, stacktrace.Propagate(err, "An error occurred removing engine containers matching filters '%+v'", filters)
	}

	successfulGuids := map[engine.EngineGUID]bool{}
	for guidStr := range successfulEngineGuidStrs {
		successfulGuids[engine.EngineGUID(guidStr)] = true
	}

	erroredGuids := map[engine.EngineGUID]error{}
	for guidStr, err := range erroredEngineGuidStrs {
		erroredGuids[engine.EngineGUID(guidStr)] = stacktrace.Propagate(
			err,
			"An error occurred destroying engine '%v'",
			guidStr,
		)
	}

	return successfulGuids, erroredGuids, nil
}


// ====================================================================================================
//                                     Private Helper Methods
// ====================================================================================================
// Gets engines matching the search filters, indexed by their container ID
func (backend *DockerKurtosisBackend) getMatchingEngines(ctx context.Context, filters *engine.EngineFilters) (map[string]*engine.Engine, error) {
	engineContainerSearchLabels := map[string]string{
		label_key_consts.AppIDDockerLabelKey.GetString():         label_value_consts.AppIDDockerLabelValue.GetString(),
		label_key_consts.ContainerTypeDockerLabelKey.GetString(): label_value_consts.EngineContainerTypeDockerLabelValue.GetString(),
		// NOTE: we do NOT use the engine GUID label here, and instead do postfiltering, because Docker has no way to do disjunctive search!
	}
	allEngineContainers, err := backend.dockerManager.GetContainersByLabels(ctx, engineContainerSearchLabels, shouldFetchAllContainersWhenRetrievingContainers)
	if err != nil {
		return nil, stacktrace.Propagate(err, "An error occurred fetching engine containers using labels: %+v", engineContainerSearchLabels)
	}

	allMatchingEnginesByContainerId := map[string]*engine.Engine{}
	for _, engineContainer := range allEngineContainers {
		containerId := engineContainer.GetId()
		engineObj, err := getEngineObjectFromContainerInfo(
			containerId,
			engineContainer.GetLabels(),
			engineContainer.GetStatus(),
			engineContainer.GetHostPortBindings(),
		)
		if err != nil {
			return nil, stacktrace.Propagate(err, "An error occurred converting container with GUID '%v' into an engine object", engineContainer.GetId())
		}

		// If the GUID filter is specified, drop engines not matching it
		if filters.GUIDs != nil && len(filters.GUIDs) > 0 {
			if _, found := filters.GUIDs[engineObj.GetGUID()]; !found {
				continue
			}
		}

		// If status filter is specified, drop engines not matching it
		if filters.Statuses != nil && len(filters.Statuses) > 0 {
			if _, found := filters.Statuses[engineObj.GetStatus()]; !found {
				continue
			}
		}

		allMatchingEnginesByContainerId[containerId] = engineObj
	}

	return allMatchingEnginesByContainerId, nil
}

func getEngineObjectFromContainerInfo(
	containerId string,
	labels map[string]string,
	containerStatus types.ContainerStatus,
	allHostMachinePortBindings map[nat.Port]*nat.PortBinding,
) (*engine.Engine, error) {
	engineGuidStr, found := labels[label_key_consts.GUIDDockerLabelKey.GetString()]
	if !found {
		return nil, stacktrace.NewError(
			"Expected a '%v' label on engine container with GUID '%v', but none was found",
			label_key_consts.GUIDDockerLabelKey.GetString(),
			containerId,
		)
	}
	engineGuid := engine.EngineGUID(engineGuidStr)

	privateGrpcPortSpec, privateGrpcProxyPortSpec, err := getEnginePrivatePorts(labels)
	if err != nil {
		return nil, stacktrace.Propagate(err, "An error occurred getting the engine container's private port specs from container '%v' with labels: %+v", containerId, labels)
	}

	isContainerRunning, found := isContainerRunningDeterminer[containerStatus]
	if !found {
		// This should never happen because we enforce completeness in a unit test
		return nil, stacktrace.NewError("No is-running designation found for engine container status '%v'; this is a bug in Kurtosis!", containerStatus.String())
	}
	var engineStatus container_status.ContainerStatus
	if isContainerRunning {
		engineStatus = container_status.ContainerStatus_Running
	} else {
		engineStatus = container_status.ContainerStatus_Stopped
	}

	var publicIpAddr net.IP
	var publicGrpcPortSpec *port_spec.PortSpec
	var publicGrpcProxyPortSpec *port_spec.PortSpec
	if engineStatus == container_status.ContainerStatus_Running {
		publicGrpcPortIpAddr, candidatePublicGrpcPortSpec, err := getPublicPortBindingFromPrivatePortSpec(privateGrpcPortSpec, allHostMachinePortBindings)
		if err != nil {
			return nil, stacktrace.Propagate(err, "The engine is running, but an error occurred getting the public port spec for the engine's grpc private port spec")
		}
		publicGrpcPortSpec = candidatePublicGrpcPortSpec

		// TODO REMOVE THIS CONDITIONAL AFTER 2022-05-03 WHEN WE'RE CONFIDENT NOBODY IS USING ENGINES WITHOUT A PROXY
		if privateGrpcProxyPortSpec != nil {
			publicGrpcProxyPortIpAddr, candidatePublicGrpcProxyPortSpec, err := getPublicPortBindingFromPrivatePortSpec(privateGrpcProxyPortSpec, allHostMachinePortBindings)
			if err != nil {
				return nil, stacktrace.Propagate(err, "The engine is running, but an error occurred getting the public port spec for the engine's grpc private port spec")
			}
			publicGrpcProxyPortSpec = candidatePublicGrpcProxyPortSpec

			if publicGrpcPortIpAddr.String() != publicGrpcProxyPortIpAddr.String() {
				return nil, stacktrace.NewError(
					"Expected the engine's grpc port public IP address '%v' and grpc-proxy port public IP address '%v' to be the same, but they were different",
					publicGrpcPortIpAddr.String(),
					publicGrpcProxyPortIpAddr.String(),
				)
			}
		}
		publicIpAddr = publicGrpcPortIpAddr
	}

	result := engine.NewEngine(
		engineGuid,
		engineStatus,
		publicIpAddr,
		publicGrpcPortSpec,
		publicGrpcProxyPortSpec,
	)

	return result, nil
}

func getEnginePrivatePorts(containerLabels map[string]string) (
	resultGrpcPortSpec *port_spec.PortSpec,
	resultGrpcProxyPortSpec *port_spec.PortSpec,
	resultErr error,
) {

	serializedPortSpecs, found := containerLabels[label_key_consts.PortSpecsDockerLabelKey.GetString()]
	if !found {
		return  nil, nil, stacktrace.NewError("Expected to find port specs label '%v' but none was found", label_key_consts.PortSpecsDockerLabelKey.GetString())
	}

	portSpecs, err := docker_port_spec_serializer.DeserializePortSpecs(serializedPortSpecs)
	if err != nil {
		// TODO AFTER 2022-05-02 SWITCH THIS TO A PLAIN ERROR WHEN WE'RE SURE NOBODY WILL BE USING THE OLD PORT SPEC STRING!
		oldPortSpecs, err := deserialize_pre_2022_03_02_PortSpecs(serializedPortSpecs)
		if err != nil {
			return nil, nil, stacktrace.Propagate(err, "Couldn't deserialize port spec string '%v' even when trying the old method", serializedPortSpecs)
		}
		portSpecs = oldPortSpecs
	}

	grpcPortSpec, foundGrpcPort := portSpecs[kurtosisInternalContainerGrpcPortId]
	if !foundGrpcPort {
		return nil, nil, stacktrace.NewError("No engine grpc port with GUID '%v' found in the engine server port specs", kurtosisInternalContainerGrpcPortId)
	}

	grpcProxyPortSpec, foundGrpcProxyPort := portSpecs[kurtosisInternalContainerGrpcProxyPortId]
	if !foundGrpcProxyPort {
		grpcProxyPortSpec = nil
		// TODO AFTER 2022-05-02 SWITCH THIS TO AN ERROR WHEN WE'RE SURE NOBODY WILL HAVE AN ENGINE WITHOUT THE PROXY
		// return nil, nil, stacktrace.NewError("No engine grpc-proxy port with GUID '%v' found in the engine server port specs", kurtosisInternalContainerGrpcProxyPortId)
	}

	return grpcPortSpec, grpcProxyPortSpec, nil
}

// TODO DELETE THIS AFTER 2022-05-02, WHEN WE'RE CONFIDENT NO ENGINES WILL BE USING THE OLD PORT SPEC!
func deserialize_pre_2022_03_02_PortSpecs(specsStr string) (map[string]*port_spec.PortSpec, error) {
	const (
		portIdAndInfoSeparator      = "."
		portNumAndProtocolSeparator = "-"
		portSpecsSeparator          = "_"

		expectedNumPortIdAndSpecFragments      = 2
		expectedNumPortNumAndProtocolFragments = 2
		portUintBase                           = 10
		portUintBits                           = 16
	)

	result := map[string]*port_spec.PortSpec{}
	portIdAndSpecStrs := strings.Split(specsStr, portSpecsSeparator)
	for _, portIdAndSpecStr := range portIdAndSpecStrs {
		portIdAndSpecFragments := strings.Split(portIdAndSpecStr, portIdAndInfoSeparator)
		numPortIdAndSpecFragments := len(portIdAndSpecFragments)
		if numPortIdAndSpecFragments != expectedNumPortIdAndSpecFragments {
			return nil, stacktrace.NewError(
				"Expected splitting port GUID & spec string '%v' to yield %v fragments but got %v",
				portIdAndSpecStr,
				expectedNumPortIdAndSpecFragments,
				numPortIdAndSpecFragments,
			)
		}
		portId := portIdAndSpecFragments[0]
		portSpecStr := portIdAndSpecFragments[1]

		portNumAndProtocolFragments := strings.Split(portSpecStr, portNumAndProtocolSeparator)
		numPortNumAndProtocolFragments := len(portNumAndProtocolFragments)
		if numPortNumAndProtocolFragments != expectedNumPortNumAndProtocolFragments {
			return nil, stacktrace.NewError(
				"Expected splitting port num & protocol string '%v' to yield %v fragments but got %v",
				portSpecStr,
				expectedNumPortIdAndSpecFragments,
				numPortIdAndSpecFragments,
			)
		}
		portNumStr := portNumAndProtocolFragments[0]
		portProtocolStr := portNumAndProtocolFragments[1]

		portNumUint64, err := strconv.ParseUint(portNumStr, portUintBase, portUintBits)
		if err != nil {
			return nil, stacktrace.Propagate(
				err,
				"An error occurred parsing port num string '%v' to uint with base %v and %v bits",
				portNumStr,
				portUintBase,
				portUintBits,
			)
		}
		portNumUint16 := uint16(portNumUint64)
		portProtocol, err := port_spec.PortProtocolString(portProtocolStr)
		if err != nil {
			return nil, stacktrace.Propagate(err, "An error occurred converting port protocol string '%v' to a port protocol enum", portProtocolStr)
		}

		portSpec, err := port_spec.NewPortSpec(portNumUint16, portProtocol)
		if err != nil {
			return nil, stacktrace.Propagate(
				err,
				"An error occurred creating port spec object from GUID & spec string '%v'",
				portIdAndSpecStr,
			)
		}

		result[portId] = portSpec
	}
	return result, nil
}

func extractEngineGuidFromUncastedEngineObj(uncastedEngineObj interface{}) (string, error) {
	castedObj, ok := uncastedEngineObj.(*engine.Engine)
	if !ok {
		return "", stacktrace.NewError("An error occurred downcasting the engine object")
	}
	return string(castedObj.GetGUID()), nil
}