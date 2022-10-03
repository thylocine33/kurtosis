package module_manager

import "github.com/kurtosis-tech/stacktrace"

type MockModuleManager struct {
	modules map[string]string
}

func NewMockModuleManager(seedModules map[string]string) *MockModuleManager {
	return &MockModuleManager{
		modules: seedModules,
	}
}

func (mockPackageManager *MockModuleManager) GetModule(moduleURL string) (string, error) {
	contents, found := mockPackageManager.modules[moduleURL]
	if !found {
		return "", stacktrace.NewError("Module '%v' not found", moduleURL)
	}
	return contents, nil
}
