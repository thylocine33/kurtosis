package services

import (
	"github.com/kurtosis-tech/kurtosis/commons/docker"
	"github.com/palantir/stacktrace"
	"io/ioutil"
	"os"
)


// This implicitly is a Docker container-backed service initializer, but we could abstract to other backends if we wanted later
type ServiceInitializer struct {
	core ServiceInitializerCore
}

func NewServiceInitializer(core ServiceInitializerCore) *ServiceInitializer {
	return &ServiceInitializer{
		core: core,
	}
}

// If Go had generics, this would be genericized so that the arg type = return type
func (initializer ServiceInitializer) CreateService(
			dockerImage string,
			staticIp string,
			manager *docker.DockerManager,
			dependencies []Service) (Service, string, error) {
	startCmdArgs, err := initializer.core.GetStartCommand(staticIp, dependencies)
	if err != nil {
		return nil, "", stacktrace.Propagate(err, "Failed to create start command.")
	}
	usedPorts := initializer.core.GetUsedPorts()
	filepathsToMount := initializer.core.GetFilepathsToMount()

	osFiles := make(map[string]*os.File)
	for filePath, _ := range filepathsToMount {
		tmpFile, err := ioutil.TempFile("", filePath)
		if err != nil {
			return nil, "", stacktrace.Propagate(err, "Could not create tempfile to store network info for passing to test controller")
		}
		osFiles[filePath] = tmpFile
	}
	// TODO create a temp file on the parent host, just like we do for the controller's network info file
	// TODO call factory.config.InitializeMountedFiles to fill in the file contents (closing the temporary file after)
	err = initializer.core.InitializeMountedFiles(osFiles, dependencies)
	bindMounts := make(map[string]string)
	for filePath, filePointer := range osFiles {
		filePointer.Close()
		bindMounts[filePointer.Name()] = filePath
	}
	if err != nil {
		return nil, "", stacktrace.Propagate(err, "Could not initialize mounted files for service.")
	}

	// TODO mount volumes when we want services to read/write state to disk
	// TODO we really want GetEnvVariables instead of GetStartCmd because every image should be nicely parameterized to avoid
	//   the testing code knowing about the specifics of the image (like where the binary is located). However, this relies
	//   on the service images being parameterized with environment variables.
	ipAddr, containerId, err := manager.CreateAndStartContainer(
			dockerImage,
			staticIp,
			usedPorts,
			startCmdArgs,
			make(map[string]string),
			// TODO pass in the mappings for each tempfile -> user-desired mount location
			bindMounts)
	if err != nil {
		return nil, "", stacktrace.Propagate(err, "Could not start docker service for image %v", dockerImage)
	}
	return initializer.core.GetServiceFromIp(ipAddr), containerId, nil
}

func (initializer ServiceInitializer) LoadService(ipAddr string) Service {
	return initializer.core.GetServiceFromIp(ipAddr)
}
