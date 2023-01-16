package service_network

import (
	"context"
	"github.com/kurtosis-tech/kurtosis/api/golang/core/kurtosis_core_rpc_api_bindings"
	"github.com/kurtosis-tech/kurtosis/container-engine-lib/lib/backend_interface/objects/service"
	"github.com/kurtosis-tech/kurtosis/core/server/api_container/server/service_network/partition_topology"
	"github.com/kurtosis-tech/kurtosis/core/server/api_container/server/service_network/service_network_types"
	"github.com/kurtosis-tech/kurtosis/core/server/commons/enclave_data_directory"
	"net"
	"net/http"
)

const (
	unimplementedMsg = "Method is unimplemented!!!"
)

type MockServiceNetwork struct {
	ipAddresses map[service.ServiceID]net.IP
}

func NewMockServiceNetwork(ipAddresses map[service.ServiceID]net.IP) *MockServiceNetwork {
	return &MockServiceNetwork{ipAddresses: ipAddresses}
}

func NewEmptyMockServiceNetwork() *MockServiceNetwork {
	return &MockServiceNetwork{
		ipAddresses: nil,
	}
}

func (m *MockServiceNetwork) Repartition(ctx context.Context, newPartitionServices map[service_network_types.PartitionID]map[service.ServiceID]bool, newPartitionConnections map[service_network_types.PartitionConnectionID]partition_topology.PartitionConnection, newDefaultConnection partition_topology.PartitionConnection) error {
	//TODO implement me
	panic(unimplementedMsg)
}

func (m *MockServiceNetwork) SetConnection(ctx context.Context, partition1 service_network_types.PartitionID, partition2 service_network_types.PartitionID, connection partition_topology.PartitionConnection) error {
	//TODO implement me
	panic(unimplementedMsg)
}

func (m *MockServiceNetwork) UnsetConnection(ctx context.Context, partition1 service_network_types.PartitionID, partition2 service_network_types.PartitionID) error {
	//TODO implement me
	panic(unimplementedMsg)
}

func (m *MockServiceNetwork) SetDefaultConnection(ctx context.Context, connection partition_topology.PartitionConnection) error {
	//TODO implement me
	panic(unimplementedMsg)
}

func (m *MockServiceNetwork) StartService(
	ctx context.Context,
	serviceId service.ServiceID,
	serviceConfig *kurtosis_core_rpc_api_bindings.ServiceConfig,
) (
	*service.Service,
	error,
) {
	//TODO implement me
	panic(unimplementedMsg)
}

func (m *MockServiceNetwork) StartServices(
	ctx context.Context,
	serviceConfigs map[service.ServiceID]*kurtosis_core_rpc_api_bindings.ServiceConfig,
) (
	map[service.ServiceID]*service.Service,
	map[service.ServiceID]error,
) {
	//TODO implement me
	panic(unimplementedMsg)
}

func (m *MockServiceNetwork) UpdateService(ctx context.Context, updateServiceConfigs map[service.ServiceID]*kurtosis_core_rpc_api_bindings.UpdateServiceConfig) (map[service.ServiceID]bool, map[service.ServiceID]error, error) {
	//TODO implement me
	panic(unimplementedMsg)
}

func (m *MockServiceNetwork) RemoveService(ctx context.Context, serviceId service.ServiceID) (service.ServiceGUID, error) {
	//TODO implement me
	panic(unimplementedMsg)
}

func (m *MockServiceNetwork) PauseService(ctx context.Context, serviceId service.ServiceID) error {
	//TODO implement me
	panic(unimplementedMsg)
}

func (m *MockServiceNetwork) UnpauseService(ctx context.Context, serviceId service.ServiceID) error {
	//TODO implement me
	panic(unimplementedMsg)
}

func (m *MockServiceNetwork) ExecCommand(ctx context.Context, serviceId service.ServiceID, command []string) (int32, string, error) {
	//TODO implement me
	panic(unimplementedMsg)
}

func (m *MockServiceNetwork) HttpRequestService(ctx context.Context, serviceId service.ServiceID, portId string, method string, contentType string, endpoint string, body string) (*http.Response, error) {
	//TODO implement me
	panic(unimplementedMsg)
}

func (m *MockServiceNetwork) GetService(ctx context.Context, serviceId service.ServiceID) (*service.Service, error) {
	//TODO implement me
	panic(unimplementedMsg)
}

func (m *MockServiceNetwork) CopyFilesFromService(ctx context.Context, serviceId service.ServiceID, _ string, _ string) (enclave_data_directory.FilesArtifactUUID, error) {
	//TODO implement me
	panic(unimplementedMsg)
}

func (m *MockServiceNetwork) GetServiceIDs() map[service.ServiceID]bool {
	//TODO implement me
	panic(unimplementedMsg)
}

func (m *MockServiceNetwork) GetIPAddressForService(serviceID service.ServiceID) (net.IP, bool) {
	ipAddress, found := m.ipAddresses[serviceID]
	return ipAddress, found
}

func (m *MockServiceNetwork) RenderTemplates(_ map[string]*kurtosis_core_rpc_api_bindings.RenderTemplatesToFilesArtifactArgs_TemplateAndData, _ string) (enclave_data_directory.FilesArtifactUUID, error) {
	panic(unimplementedMsg)
}

func (m *MockServiceNetwork) UploadFilesArtifact(_ []byte, _ string) (enclave_data_directory.FilesArtifactUUID, error) {
	panic(unimplementedMsg)
}

func (m *MockServiceNetwork) IsNetworkPartitioningEnabled() bool {
	panic(unimplementedMsg)
}
