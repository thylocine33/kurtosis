package docker

import (
	"bytes"
	"context"
	"fmt"
	"github.com/docker/go-connections/nat"
	"github.com/kurtosis-tech/container-engine-lib/lib/docker_manager"
	"github.com/kurtosis-tech/container-engine-lib/lib/docker_manager/types"
	"github.com/kurtosis-tech/container-engine-lib/lib/kurtosis_backend"
	"github.com/kurtosis-tech/container-engine-lib/lib/kurtosis_backend/docker/object_attributes_provider"
	"github.com/kurtosis-tech/container-engine-lib/lib/kurtosis_backend/objects/engine"
	"github.com/kurtosis-tech/container-engine-lib/lib/kurtosis_backend/objects/port_spec"
	"github.com/kurtosis-tech/object-attributes-schema-lib/schema"
	"github.com/kurtosis-tech/stacktrace"
	"github.com/sirupsen/logrus"
	"net"
	"strconv"
	"strings"
	"time"
)

const (
	dockerSocketFilepath = "/var/run/docker.sock"

	// The Docker API's default is to return just containers whose status is "running"
	// However, we'd rather do our own filtering on what "running" means (because, e.g., "restarting"
	// should also be considered as running)
	shouldFetchAllContainersWhenRetrievingContainers = true

	nameOfNetworkToStartEngineContainerIn = "bridge"

	// The engine server uses gRPC so MUST listen on TCP (no other protocols are supported)
	// This is the Docker constant indicating a TCP port (because Docker doesn't have an enum for this sadly)
	engineGrpcPortDockerProtocol = "tcp"

	// The proxy for the engine's gRPC port also MUST listen on TCP
	// This is the Docker constant indicating a TCP port (because Docker doesn't have an enum for this sadly)
	engineGrpcProxyPortDockerProtocol = "tcp"

	// The protocol string we use in the netstat command used to ensure the engine container is available
	netstatWaitForAvailabilityPortProtocol = "tcp"

	maxWaitForEngineAvailabilityRetries         = 10
	timeBetweenWaitForEngineAvailabilityRetries = 1 * time.Second

	engineAvailabilityWaitingExecCmdSuccessExitCode = 0

	shouldGetStoppedContainersWhenCheckingForExistingEngines = false

	engineStopTimeout = 30 * time.Second

	// Obviously yes
	shouldFetchStoppedContainersWhenDestroyingStoppedContainers = true

	// --------------------------- Old port parsing constants ------------------------------------
	// These are the old labels that the API container used to use before 2021-11-15 for declaring its port num protocol
	// We can get rid of this after 2022-05-15, when we're confident no users will be running API containers with the old label
	pre2021_11_15_portNum   = uint16(9710)
	pre2021_11_15_portProto = schema.PortProtocol_TCP

	// These are the old labels that the API container used to use before 2021-12-02 for declaring its port num protocol
	// We can get rid of this after 2022-06-02, when we're confident no users will be running API containers with the old label
	pre2021_12_02_portNumLabel    = "com.kurtosistech.port-number"
	pre2021_12_02_portNumBase     = 10
	pre2021_12_02_portNumUintBits = 16
	pre2021_12_02_portProtocol    = schema.PortProtocol_TCP
	// --------------------------- Old port parsing constants ------------------------------------

	// Engine container port number string parsing constants
	hostMachinePortNumStrParsingBase = 10
	hostMachinePortNumStrParsingBits = 16

	shouldCleanRunningEngineContainers = false

	waitForEngineResponseTimeout = 5 * time.Second
)

// This maps a Docker container's status to a binary "is the container considered running?" determiner
// Its completeness is enforced via unit test
var isContainerRunningDeterminer = map[types.ContainerStatus]bool{
	types.ContainerStatus_Paused: false,
	types.ContainerStatus_Restarting: true,
	types.ContainerStatus_Running: true,
	types.ContainerStatus_Removing: true,
	types.ContainerStatus_Dead: false,
	types.ContainerStatus_Created: false,
	types.ContainerStatus_Exited: false,
}

// Unfortunately, Docker doesn't have an enum for the protocols it supports, so we have to create this translation map
var portSpecProtosToDockerPortProtos = map[port_spec.PortProtocol]string{
	port_spec.PortProtocol_TCP:  "tcp",
	port_spec.PortProtocol_SCTP: "sctp",
	port_spec.PortProtocol_UDP:   "udp",
}

type DockerKurtosisBackendCore struct {
	// The logger that all log messages will be written to
	log *logrus.Logger // NOTE: This log should be used for all log statements - the system-wide logger should NOT be used!

	dockerManager *docker_manager.DockerManager

	objAttrsProvider object_attributes_provider.DockerObjectAttributesProvider
}

func NewDockerKurtosisBackendCore(log *logrus.Logger, dockerManager *docker_manager.DockerManager) *DockerKurtosisBackendCore {
	return &DockerKurtosisBackendCore{
		log:              log,
		dockerManager:    dockerManager,
		objAttrsProvider: object_attributes_provider.GetDockerObjectAttributesProvider(),
	}
}

func (backendCore *DockerKurtosisBackendCore) CreateEngine(
	ctx context.Context,
	imageOrgAndRepo string,
	imageVersionTag string,
	grpcPortNum uint16,
	grpcProxyPortNum uint16,
	engineDataDirpathOnHostMachine string,
	envVars map[string]string,
) (
	*engine.Engine,
	error,
) {
	matchingNetworks, err := backendCore.dockerManager.GetNetworksByName(ctx, nameOfNetworkToStartEngineContainerIn)
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

	containerStartTimeUnixSecs := time.Now().Unix()
	engineIdStr := fmt.Sprintf("%v", containerStartTimeUnixSecs)

	engineAttrs, err := backendCore.objAttrsProvider.ForEngineServer(engineIdStr, grpcPortNum, grpcProxyPortNum)
	if err != nil {
		return nil, stacktrace.Propagate(
			err,
			"An error occurred getting the engine server container attributes using id '%v', grpc port num '%v', and " +
				"grpc proxy port num '%v'",
			engineIdStr,
			grpcPortNum,
			grpcProxyPortNum,
		)
	}

	grpcPortObj, err := nat.NewPort(
		engineGrpcPortDockerProtocol,
		fmt.Sprintf("%v", grpcPortNum),
	)
	if err != nil {
		return nil, stacktrace.Propagate(
			err,
			"An error occurred creating a port object with port num '%v' and Docker protocol '%v' to represent the engine's grpc port",
			grpcPortNum,
			engineGrpcPortDockerProtocol,
		)
	}

	grpcProxyPortObj, err := nat.NewPort(
		engineGrpcProxyPortDockerProtocol,
		fmt.Sprintf("%v", grpcProxyPortNum),
	)
	if err != nil {
		return nil, stacktrace.Propagate(
			err,
			"An error occurred creating a port object with port num '%v' and Docker protocol '%v' to represent the engine's grpc proxy port",
			grpcProxyPortNum,
			engineGrpcProxyPortDockerProtocol,
		)
	}

	usedPorts := map[nat.Port]docker_manager.PortPublishSpec{
		grpcPortObj: docker_manager.NewManualPublishingSpec(grpcPortNum),
		grpcProxyPortObj: docker_manager.NewManualPublishingSpec(grpcProxyPortNum),
	}

	bindMounts := map[string]string{
		// Necessary so that the engine server can interact with the Docker engine
		dockerSocketFilepath:           dockerSocketFilepath,
		engineDataDirpathOnHostMachine: kurtosis_backend.EngineDataDirpathOnEngineServerContainer,
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

	// Best-effort pull attempt
	if err = backendCore.dockerManager.PullImage(ctx, containerImageAndTag); err != nil {
		logrus.Warnf("Failed to pull the latest version of engine server image '%v'; you may be running an out-of-date version", containerImageAndTag)
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

	containerId, hostMachinePortBindings, err := backendCore.dockerManager.CreateAndStartContainer(ctx, createAndStartArgs)
	if err != nil {
		return nil, stacktrace.Propagate(err, "An error occurred starting the Kurtosis engine container")
	}
	shouldKillEngineContainer := true
	defer func() {
		if shouldKillEngineContainer {
			if err := backendCore.dockerManager.KillContainer(context.Background(), containerId); err != nil {
				logrus.Errorf("Launching the engine server didn't complete successfully so we tried to kill the container we started, but doing so exited with an error:\n%v", err)
				logrus.Errorf("ACTION REQUIRED: You'll need to manually kill engine server with container ID '%v'!!!!!!", containerId)
			}
		}
	}()

	if err := waitForAvailability(ctx, backendCore.dockerManager, containerId, grpcPortNum); err != nil {
		return nil, stacktrace.Propagate(err, "An error occurred waiting for the engine server's grpc port to become available")
	}

	if err := waitForAvailability(ctx, backendCore.dockerManager, containerId, grpcProxyPortNum); err != nil {
		return nil, stacktrace.Propagate(err, "An error occurred waiting for the engine server's grpc proxy port to become available")
	}

	hostMachineEngineGrpcPortBinding, found := hostMachinePortBindings[grpcPortObj]
	if !found {
		return nil, stacktrace.NewError("The Kurtosis engine server started successfully, but no host machine port binding for the grpc port was found")
	}

	hostMachineEngineGrpcProxyPortBinding, found := hostMachinePortBindings[grpcProxyPortObj]
	if !found {
		return nil, stacktrace.NewError("The Kurtosis engine server started successfully, but no host machine port binding for the grpc proxy port was found")
	}

	publicGrpcIpAddrStr := hostMachineEngineGrpcPortBinding.HostIP
	publicGrpcProxyIpAddrStr := hostMachineEngineGrpcProxyPortBinding.HostIP
	if publicGrpcIpAddrStr != publicGrpcProxyIpAddrStr {
		return nil, stacktrace.NewError(
			"Expected public IP address '%v' for the grpc port to be the same as public IP address '%v' for " +
				"the grpc proxy port, but they were different",

			publicGrpcIpAddrStr,
			publicGrpcProxyIpAddrStr,
		)
	}

	publicIpAddrStr := publicGrpcIpAddrStr
	publicIpAddr := net.ParseIP(publicIpAddrStr)
	if publicIpAddr == nil {
		return nil, stacktrace.NewError("The engine server's port was reported to be bound on host machine interface IP '%v', but this is not a valid IP string", publicIpAddrStr)
	}

	publicGrpcPortNumStr := hostMachineEngineGrpcPortBinding.HostPort
	publicGrpcPortNumUint64, err := strconv.ParseUint(publicGrpcPortNumStr, hostMachinePortNumStrParsingBase, hostMachinePortNumStrParsingBits)
	if err != nil {
		return nil, stacktrace.Propagate(
			err,
			"An error occurred parsing engine server grpc public port string '%v' using base '%v' and uint bits '%v'",
			publicGrpcPortNumStr,
			hostMachinePortNumStrParsingBase,
			hostMachinePortNumStrParsingBits,
		)
	}
	publicGrpcPortNumUint16 := uint16(publicGrpcPortNumUint64) // Safe to do because we pass the requisite number of bits into the parse command

	publicGrpcProxyPortNumStr := hostMachineEngineGrpcProxyPortBinding.HostPort
	publicGrpcProxyPortNumUint64, err := strconv.ParseUint(publicGrpcProxyPortNumStr, hostMachinePortNumStrParsingBase, hostMachinePortNumStrParsingBits)
	if err != nil {
		return nil, stacktrace.Propagate(
			err,
			"An error occurred parsing engine server grpc proxy public port string '%v' using base '%v' and uint bits '%v'",
			publicGrpcProxyPortNumStr,
			hostMachinePortNumStrParsingBase,
			hostMachinePortNumStrParsingBits,
		)
	}
	publicGrpcProxyPortNumUint16 := uint16(publicGrpcProxyPortNumUint64) // Safe to do because we pass the requisite number of bits into the parse command

	result := engine.NewEngine(
		engineIdStr,
		engine.EngineStatus_Running,
		publicIpAddr,
		publicGrpcPortNumUint16,
		publicGrpcProxyPortNumUint16,
	)

	shouldKillEngineContainer = false
	return result, nil
}

func (backendCore *DockerKurtosisBackendCore) GetEngines(ctx context.Context, filters *engine.GetEnginesFilters) (map[string]*engine.Engine, error) {
	searchLabels := map[string]string{
		// TODO extract this into somewhere better so we're ALWAYS getting containers using the Kurtosis label and nothing else????
		object_attributes_provider.AppIDLabelKey.GetString(): object_attributes_provider.AppIDLabelValue.GetString(),
	}
	containersMatchingLabels, err := backendCore.dockerManager.GetContainersByLabels(ctx, searchLabels, shouldFetchAllContainersWhenRetrievingContainers)
	if err != nil {
		return nil, stacktrace.Propagate(err, "An error occurred fetching engine containers using labels: %+v", searchLabels)
	}

	allMatchingEngines := map[string]*engine.Engine{}
	for _, matchingContainer := range containersMatchingLabels {
		engineObj, err := getEngineObjectFromContainerInfo(
			matchingContainer.GetId(),
			matchingContainer.GetLabels(),
			matchingContainer.GetStatus(),
			matchingContainer.GetHostPortBindings(),
		)
		if err != nil {
			return nil, stacktrace.Propagate(err, "An error occurred converting container with ID '%v' into an engine object", matchingContainer.GetId())
		}
		allMatchingEngines[engineObj.GetID()] = engineObj
	}

	allEnginesMatchingStatus := map[string]*engine.Engine{}
	for engineId, engineObj := range allMatchingEngines {
		engineStatus := engineObj.GetStatus()
		if _, found := filters.Statuses[engineStatus]; found {
			allEnginesMatchingStatus[engineId] = engineObj
		}
	}

	return allEnginesMatchingStatus, nil
}

func (backendCore *DockerKurtosisBackendCore) StopEngines(ctx context.Context, ids map[string]bool) error {





	matchingEngineContainers, err := backendCore.dockerManager.GetContainersByLabels(
		ctx,
		engineLabels,
		shouldGetStoppedContainersWhenCheckingForExistingEngines,
	)
	if err != nil {
		return stacktrace.Propagate(err, "An error occurred getting Kurtosis engine containers, which we need to check for existing engines")
	}

	numMatchingEngineContainers := len(matchingEngineContainers)
	if numMatchingEngineContainers == 0 {
		return nil
	}
	if numMatchingEngineContainers > 1 {
		logrus.Warnf(
			"Found %v Kurtosis engine containers, which is strange because there should never be more than 1 engine container; all will be stopped",
			numMatchingEngineContainers,
		)
	}

	engineStopErrorStrs := []string{}
	for _, engineContainer := range matchingEngineContainers {
		containerName := engineContainer.GetName()
		containerId := engineContainer.GetId()
		if err := backendCore.dockerManager.StopContainer(ctx, containerId, engineStopTimeout); err != nil {
			wrappedErr := stacktrace.Propagate(
				err,
				"An error occurred stopping engine container '%v' with ID '%v'",
				containerName,
				containerId,
			)
			engineStopErrorStrs = append(engineStopErrorStrs, wrappedErr.Error())
		}
	}

	if len(engineStopErrorStrs) > 0 {
		return stacktrace.NewError(
			"One or more errors occurred stopping the engine(s):\n%v",
			strings.Join(
				engineStopErrorStrs,
				"\n\n",
			),
		)
	}
	return nil
}

func (backendCore *DockerKurtosisBackendCore) DestroyEngines(ctx context.Context, ids map[string]bool) error {
	// TODO implement this!!!
	panic("Implement this!!")

	/*
	matchingContainers, err := backendCore.dockerManager.GetContainersByLabels(
		ctx,
		searchLabels,
		shouldFetchStoppedContainersWhenDestroyingStoppedContainers,
	)
	if err != nil {
		return nil, nil, stacktrace.Propagate(err, "An error occurred getting containers matching labels '%+v'", searchLabels)
	}

	containersToDestroy := []*types.Container{}
	for _, container := range matchingContainers {
		containerName := container.GetName()
		containerStatus := container.GetStatus()
		if shouldKillRunningContainers {
			containersToDestroy = append(containersToDestroy, container)
			continue
		}

		isRunning, err := container_status_calculator.IsContainerRunning(containerStatus)
		if err != nil {
			return nil, nil, stacktrace.Propagate(err, "An error occurred determining if container '%v' with status '%v' is running", containerName, containerStatus)
		}
		if !isRunning {
			containersToDestroy = append(containersToDestroy, container)
		}
	}

	successfullyDestroyedContainerNames := []string{}
	removeContainerErrors := []error{}
	for _, container := range containersToDestroy {
		containerId := container.GetId()
		containerName := container.GetName()
		if err := backendCore.dockerManager.RemoveContainer(ctx, containerId); err != nil {
			wrappedErr := stacktrace.Propagate(err, "An error occurred removing stopped container '%v'", containerName)
			removeContainerErrors = append(removeContainerErrors, wrappedErr)
			continue
		}
		successfullyDestroyedContainerNames = append(successfullyDestroyedContainerNames, containerName)
	}

	return successfullyDestroyedContainerNames, removeContainerErrors, nil

	 */
}

/*
func (backendCore *DockerKurtosisBackendCore) CleanStoppedEngines(ctx context.Context) ([]string, []error, error) {
	successfullyDestroyedContainerNames, containerDestructionErrors, err := backendCore.cleanContainers(ctx, engineLabels, shouldCleanRunningEngineContainers)
	if err != nil {
		return nil, nil, stacktrace.Propagate(err, "An error occurred cleaning stopped Kurtosis engine containers")
	}
	return successfullyDestroyedContainerNames, containerDestructionErrors, nil
}


func (backendCore *DockerKurtosisBackendCore) GetEnginePublicIPAndPort(
	ctx context.Context,
) (
	resultPublicIpAddr net.IP,
	resultPublicPortNum uint16,
	resultIsEngineStopped bool,
	resultErr error,
) {
	runningEngineContainers, err := backendCore.dockerManager.GetContainersByLabels(ctx, engineLabels, shouldGetStoppedContainersWhenCheckingForExistingEngines)
	if err != nil {
		return nil, 0, false, stacktrace.Propagate(err, "An error occurred getting Kurtosis engine containers")
	}

	numRunningEngineContainers := len(runningEngineContainers)
	if numRunningEngineContainers > 1 {
		return nil, 0, false, stacktrace.NewError("Cannot report engine status because we found %v running Kurtosis engine containers; this is very strange as there should never be more than one", numRunningEngineContainers)
	}
	if numRunningEngineContainers == 0 {
		return nil, 0, true, nil
	}
	engineContainer := runningEngineContainers[0]

	currentlyRunningEngineContainerLabels := engineContainer.GetLabels()
}
*/

// ====================================================================================================
//                                     Private Helper Methods
// ====================================================================================================
func waitForAvailability(ctx context.Context, dockerManager *docker_manager.DockerManager, containerId string, listenPortNum uint16) error {
	commandStr := fmt.Sprintf(
		"[ -n \"$(netstat -anp %v | grep LISTEN | grep %v)\" ]",
		netstatWaitForAvailabilityPortProtocol,
		listenPortNum,
	)
	execCmd := []string{
		"sh",
		"-c",
		commandStr,
	}
	for i := 0; i < maxWaitForEngineAvailabilityRetries; i++ {
		outputBuffer := &bytes.Buffer{}
		exitCode, err := dockerManager.RunExecCommand(ctx, containerId, execCmd, outputBuffer)
		if err == nil {
			if exitCode == engineAvailabilityWaitingExecCmdSuccessExitCode {
				return nil
			}
			logrus.Debugf(
				"Engine server availability-waiting command '%v' returned without a Docker error, but exited with non-%v exit code '%v' and logs:\n%v",
				commandStr,
				engineAvailabilityWaitingExecCmdSuccessExitCode,
				exitCode,
				outputBuffer.String(),
			)
		} else {
			logrus.Debugf(
				"Engine server availability-waiting command '%v' experienced a Docker error:\n%v",
				commandStr,
				err,
			)
		}

		// Tiny optimization to not sleep if we're not going to run the loop again
		if i < maxWaitForEngineAvailabilityRetries {
			time.Sleep(timeBetweenWaitForEngineAvailabilityRetries)
		}
	}

	return stacktrace.NewError(
		"The engine server didn't become available (as measured by the command '%v') even after retrying %v times with %v between retries",
		commandStr,
		maxWaitForEngineAvailabilityRetries,
		timeBetweenWaitForEngineAvailabilityRetries,
	)
}

func getEngineObjectFromContainerInfo(
	containerId string,
	labels map[string]string,
	containerStatus types.ContainerStatus,
	allHostMachinePortBindings map[nat.Port]*nat.PortBinding,
) (*engine.Engine, error) {
	engineGuid, found := labels[object_attributes_provider.GUIDLabelKey.GetString()]
	if !found {
		return nil, stacktrace.NewError(
			"Expected a '%v' label on engine container with ID '%v', but none was found",
			object_attributes_provider.GUIDLabelKey.GetString(),
			containerId,
		)
	}

	privateGrpcPortSpec, privateGrpcProxyPortSpec, err := getPrivateEnginePorts(labels)
	if err != nil {
		return nil, stacktrace.Propagate(err, "An error occurred getting the engine container's private port specs from container '%v' with labels: %+v", containerId, labels)
	}

	isContainerRunning, found := isContainerRunningDeterminer[containerStatus]
	if !found {
		// This should never happen because we enforce completeness in a unit test
		return nil, stacktrace.NewError("No is-running designation found for engine container status '%v'; this is a bug in Kurtosis!", containerStatus.String())
	}
	var engineStatus engine.EngineStatus
	if isContainerRunning {
		engineStatus = engine.EngineStatus_Running
	} else {
		engineStatus = engine.EngineStatus_Stopped
	}

	var publicIpAddr net.IP
	var publicGrpcPortSpec *port_spec.PortSpec
	var publicGrpcProxyPortSpec *port_spec.PortSpec
	if engineStatus == engine.EngineStatus_Running {
		publicGrpcPortIpAddr, candidatePublicGrpcPortSpec, err := getPublicPortSpecFromPrivatePortSpec(privateGrpcPortSpec, allHostMachinePortBindings)
		if err != nil {
			return nil, stacktrace.Propagate(err, "The engine is running, but an error occurred getting the public port spec for the engine's grpc private port spec")
		}
		publicGrpcPortSpec = candidatePublicGrpcPortSpec

		publicGrpcProxyPortIpAddr, candidatePublicGrpcProxyPortSpec, err := getPublicPortSpecFromPrivatePortSpec(privateGrpcProxyPortSpec, allHostMachinePortBindings)
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

func getPublicPortSpecFromPrivatePortSpec(privatePortSpec *port_spec.PortSpec, allHostMachinePortBindings map[nat.Port]*nat.PortBinding) (
	resultPublicIpAddr net.IP,
	resultPublicPortSpec *port_spec.PortSpec,
	resultErr error,
) {
	portNum := privatePortSpec.GetNumber()

	// Convert port spec protocol -> Docker protocol string
	portSpecProto := privatePortSpec.GetProtocol()
	privatePortDockerProto, found := portSpecProtosToDockerPortProtos[portSpecProto]
	if !found {
		return nil, nil, stacktrace.NewError(
			"No Docker protocol was defined for port spec proto '%v'; this is a bug in Kurtosis",
			portSpecProto.String(),
		)
	}

	privatePortNumStr := fmt.Sprintf("%v", portNum)
	dockerPrivatePort, err := nat.NewPort(
		privatePortDockerProto,
		privatePortNumStr,
	)
	if err != nil {
		return nil, nil, stacktrace.Propagate(
			err,
			"An error occurred creating the Docker private port object from port number '%v' and protocol '%v', which is necessary for getting the corresponding host machine port bindings",
			privatePortNumStr,
			privatePortDockerProto,
		)
	}

	hostMachinePortBinding, found := allHostMachinePortBindings[dockerPrivatePort]
	if !found {
		return nil, nil, stacktrace.NewError(
			"No host machine port binding was specified for Docker port '%v' which corresponds to port spec with num '%v' and protocol '%v'",
			dockerPrivatePort,
			portNum,
			portSpecProto.String(),
		)
	}

	hostMachineIpAddrStr := hostMachinePortBinding.HostIP
	hostMachineIp := net.ParseIP(hostMachineIpAddrStr)
	if hostMachineIp == nil {
		return nil, nil, stacktrace.NewError(
			"Found host machine IP string '%v' for port spec with number '%v' and protocol '%v', but it wasn't a valid IP",

			hostMachineIpAddrStr)
	}

	hostMachinePortNumStr := hostMachinePortBinding.HostPort
	hostMachinePortNumUint64, err := strconv.ParseUint(hostMachinePortNumStr, hostMachinePortNumStrParsingBase, hostMachinePortNumStrParsingBits)
	if err != nil {
		return nil, nil, stacktrace.Propagate(
			err,
			"An error occurred parsing engine container host machine port num string '%v' using base '%v' and num bits '%v'",
			hostMachinePortNumStr,
			hostMachinePortNumStrParsingBase,
			hostMachinePortNumStrParsingBits,
		)
	}
	hostMachinePortNumUint16 := uint16(hostMachinePortNumUint64) // Okay to do due to specifying the number of bits above
	publicPortSpec, err := port_spec.NewPortSpec(hostMachinePortNumUint16, portSpecProto)
	if err != nil {
		return nil, nil, stacktrace.Propagate(err, "An error occurred creating public port spec with host machine port num '%v' and protocol '%v'", hostMachinePortNumUint16, portSpecProto.String())
	}

	return hostMachineIp, publicPortSpec, nil
}

func getPrivateEnginePorts(containerLabels map[string]string) (
	resultGrpcPortSpec *port_spec.PortSpec,
	resultGrpcProxyPortSpec *port_spec.PortSpec,
	resultErr error,
) {
	serializedPortSpecs, found := containerLabels[object_attributes_provider.PortSpecsLabelKey.GetString()]
	if found {
		portSpecs, err := schema.DeserializePortSpecs(serializedPortSpecs)
		if err != nil {
			return nil, nil, stacktrace.Propagate(err, "An error occurred deserializing engine server port spec string '%v'", serializedPortSpecs)
		}
		grpcPortSpec, foundInternalPortId := portSpecs[schema.KurtosisInternalContainerGRPCPortID]
		if !foundInternalPortId {
			return nil, stacktrace.NewError("No Kurtosis-internal port ID '%v' found in the engine server port specs", schema.KurtosisInternalContainerGRPCPortID)
		}
		return portSpec, nil
	}

	// We can get rid of this after 2022-06-02, when we're confident no users will be running API containers with this label
	pre2021_12_02Port, err := getApiContainerPrivatePortUsingPre2021_12_02Label(containerLabels)
	if err == nil {
		return pre2021_12_02Port, nil
	} else {
		logrus.Debugf("An error occurred getting the engine container private port num using the pre-2021-12-02 label: %v", err)
	}

	// We can get rid of this after 2022-05-15, when we're confident no users will be running API containers with this label
	pre2021_11_15Port, err := schema.NewPortSpec(pre2021_11_15_portNum, pre2021_11_15_portProto)
	if err != nil {
		return nil, stacktrace.Propagate(err, "Couldn't create engine private port spec using pre-2021-11-15 constants")
	}
	return pre2021_11_15Port, nil
}

func getApiContainerPrivatePortUsingPre2021_12_02Label(containerLabels map[string]string) (*schema.PortSpec, error) {
	// We can get rid of this after 2022-06-02, when we're confident no users will be running API containers with this label
	portNumStr, found := containerLabels[pre2021_12_02_portNumLabel]
	if !found {
		return nil, stacktrace.NewError("Couldn't get engine container private port using the pre-2021-12-02 label '%v' because it doesn't exist", pre2021_12_02_portNumLabel)
	}
	portNumUint64, err := strconv.ParseUint(portNumStr, pre2021_12_02_portNumBase, pre2021_12_02_portNumUintBits)
	if err != nil {
		return nil, stacktrace.Propagate(err, "An error occurred parsing pre-2021-12-02 private port num string '%v' to a uint16", portNumStr)
	}
	portNumUint16 := uint16(portNumUint64) // Safe to do because we pass in the number of bits to the ParseUint call above
	result, err := schema.NewPortSpec(portNumUint16, pre2021_12_02_portProtocol)
	if err != nil {
		return nil, stacktrace.Propagate(
			err,
			"An error occurred creating a new port spec using pre-2021-12-02 port num '%v' and protocol '%v'",
			portNumUint16,
			pre2021_12_02_portProtocol,
		)
	}
	return result, nil
}
