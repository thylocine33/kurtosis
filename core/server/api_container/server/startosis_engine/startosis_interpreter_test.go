package startosis_engine

import (
	"context"
	"github.com/kurtosis-tech/kurtosis/api/golang/core/kurtosis_core_rpc_api_bindings"
	"github.com/kurtosis-tech/kurtosis/container-engine-lib/lib/backend_interface/objects/service"
	"github.com/kurtosis-tech/kurtosis/core/server/api_container/server/startosis_engine/kurtosis_instruction"
	"github.com/kurtosis-tech/kurtosis/core/server/api_container/server/startosis_engine/kurtosis_instruction/add_service"
	"github.com/kurtosis-tech/kurtosis/core/server/api_container/server/startosis_engine/module_manager"
	"github.com/kurtosis-tech/kurtosis/core/server/api_container/server/startosis_engine/startosis_errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"testing"
)

const (
	enclaveDataVolumeDirpath = "/tmp/"
)

func emptyMockPackageManager() *module_manager.MockModuleManager {
	return module_manager.NewMockModuleManager(
		map[string]string{},
	)
}

func TestStartosisCompiler_SimplePrintScript(t *testing.T) {
	testString := "Hello World!"
	interpreter := NewStartosisInterpreter(nil, emptyMockPackageManager())
	script := `
print("` + testString + `")
`

	scriptOutput, interpretationError, instructions := interpreter.Interpret(context.Background(), script)
	require.Equal(t, 0, len(instructions)) // No kurtosis instruction
	require.Nil(t, interpretationError)

	expectedOutput := testString + `
`
	require.Equal(t, expectedOutput, string(scriptOutput))
}

func TestStartosisCompiler_ScriptFailingSingleError(t *testing.T) {
	interpreter := NewStartosisInterpreter(nil, emptyMockPackageManager())
	script := `
print("Starting Startosis script!")

unknownInstruction()
`

	scriptOutput, interpretationError, instructions := interpreter.Interpret(context.Background(), script)
	require.Equal(t, 0, len(instructions))
	require.Empty(t, scriptOutput)

	expectedError := startosis_errors.NewInterpretationErrorWithCustomMsg(
		"Multiple errors caught interpreting the Startosis script. Listing each of them below.",
		[]startosis_errors.CallFrame{
			*startosis_errors.NewCallFrame("undefined: unknownInstruction", startosis_errors.NewScriptPosition(4, 1)),
		},
	)
	require.Equal(t, expectedError, interpretationError)
}

func TestStartosisCompiler_ScriptFailingMultipleErrors(t *testing.T) {
	interpreter := NewStartosisInterpreter(nil, emptyMockPackageManager())
	script := `
print("Starting Startosis script!")

unknownInstruction()
print(unknownVariable)

unknownInstruction2()
`

	scriptOutput, interpretationError, instructions := interpreter.Interpret(context.Background(), script)
	require.Equal(t, 0, len(instructions))
	require.Empty(t, scriptOutput)

	expectedError := startosis_errors.NewInterpretationErrorWithCustomMsg(
		multipleInterpretationErrorMsg,
		[]startosis_errors.CallFrame{
			*startosis_errors.NewCallFrame("undefined: unknownInstruction", startosis_errors.NewScriptPosition(4, 1)),
			*startosis_errors.NewCallFrame("undefined: unknownVariable", startosis_errors.NewScriptPosition(5, 7)),
			*startosis_errors.NewCallFrame("undefined: unknownInstruction2", startosis_errors.NewScriptPosition(7, 1)),
		},
	)
	require.Equal(t, expectedError, interpretationError)
}

func TestStartosisInterpreter_ScriptFailingSyntaxError(t *testing.T) {
	interpreter := NewStartosisInterpreter(nil, emptyMockPackageManager())
	script := `
print("Starting Startosis script!")

load("otherScript.start") # fails b/c load takes in at least 2 args
`

	scriptOutput, interpretationError, instructions := interpreter.Interpret(context.Background(), script)
	require.Equal(t, 0, len(instructions))
	require.Empty(t, scriptOutput)

	expectedError := startosis_errors.NewInterpretationErrorFromStacktrace(
		[]startosis_errors.CallFrame{
			*startosis_errors.NewCallFrame("load statement must import at least 1 symbol", startosis_errors.NewScriptPosition(4, 5)),
		},
	)
	require.Equal(t, expectedError, interpretationError)
}

func TestStartosisCompiler_ValidSimpleScriptWithInstruction(t *testing.T) {
	interpreter := NewStartosisInterpreter(nil, emptyMockPackageManager())
	script := `
print("Starting Startosis script!")

service_id = "example-datastore-server"
print("Adding service " + service_id)

service_config = struct(
	container_image_name = "kurtosistech/example-datastore-server",
	used_ports = {
		"grpc": struct(number = 1323, protocol = "TCP")
	}
)
add_service(service_id = service_id, service_config = service_config)
`

	scriptOutput, interpretationError, instructions := interpreter.Interpret(context.Background(), script)
	require.Equal(t, 1, len(instructions))
	require.Nil(t, interpretationError)

	addServiceInstruction := add_service.NewAddServiceInstruction(
		nil,
		*kurtosis_instruction.NewInstructionPosition(13, 12),
		service.ServiceID("example-datastore-server"),
		&kurtosis_core_rpc_api_bindings.ServiceConfig{
			ContainerImageName: "kurtosistech/example-datastore-server",
			PrivatePorts: map[string]*kurtosis_core_rpc_api_bindings.Port{
				"grpc": {
					Number:   1323,
					Protocol: kurtosis_core_rpc_api_bindings.Port_TCP,
				},
			},
		})

	require.Equal(t, instructions[0], addServiceInstruction)

	expectedOutput := `Starting Startosis script!
Adding service example-datastore-server
`
	require.Equal(t, expectedOutput, string(scriptOutput))
}

func TestStartosisInterpreter_ValidSimpleScriptWithInstructionMissingContainerName(t *testing.T) {
	interpreter := NewStartosisInterpreter(nil, emptyMockPackageManager())
	script := `
print("Starting Startosis script!")

service_id = "example-datastore-server"
print("Adding service " + service_id)

service_config = struct(
	# /!\ /!\ missing container name /!\ /!\
	used_ports = {
		"grpc": struct(number = 1323, protocol = "TCP")
	}
)
add_service(service_id = service_id, service_config = service_config)
`

	scriptOutput, interpretationError, instructions := interpreter.Interpret(context.Background(), script)
	require.Equal(t, 0, len(instructions))
	require.Empty(t, scriptOutput)

	expectedError := startosis_errors.NewInterpretationErrorWithCustomMsg(
		"Evaluation error: Missing value 'container_image_name' as element of the struct object 'service_config'",
		[]startosis_errors.CallFrame{
			*startosis_errors.NewCallFrame("<toplevel>", startosis_errors.NewScriptPosition(13, 12)),
			*startosis_errors.NewCallFrame("add_service", startosis_errors.NewScriptPosition(0, 0)),
		},
	)
	require.Equal(t, expectedError, interpretationError)
}

func TestStartosisInterpreter_ValidSimpleScriptWithInstructionTypoInProtocol(t *testing.T) {
	interpreter := NewStartosisInterpreter(nil, emptyMockPackageManager())
	script := `
print("Starting Startosis script!")

service_id = "example-datastore-server"
print("Adding service " + service_id)

service_config = struct(
	container_image_name = "kurtosistech/example-datastore-server",
	used_ports = {
		"grpc": struct(number = 1323, protocol = "TCPK") # typo in protocol
	}
)
add_service(service_id = service_id, service_config = service_config)
`

	scriptOutput, interpretationError, instructions := interpreter.Interpret(context.Background(), script)
	require.Equal(t, 0, len(instructions))
	require.Empty(t, scriptOutput)
	expectedError := startosis_errors.NewInterpretationErrorWithCustomMsg(
		"Evaluation error: Port protocol should be either TCP, SCTP, UDP",
		[]startosis_errors.CallFrame{
			*startosis_errors.NewCallFrame("<toplevel>", startosis_errors.NewScriptPosition(13, 12)),
			*startosis_errors.NewCallFrame("add_service", startosis_errors.NewScriptPosition(0, 0)),
		},
	)
	require.Equal(t, expectedError, interpretationError)
}

func TestStartosisCompiler_ValidSimpleScriptWithInstructionPortNumberAsString(t *testing.T) {
	interpreter := NewStartosisInterpreter(nil, emptyMockPackageManager())
	script := `
print("Starting Startosis script!")

service_id = "example-datastore-server"
print("Adding service " + service_id)

service_config = struct(
	container_image_name = "kurtosistech/example-datastore-server",
	used_ports = {
		"grpc": struct(number = "1234", protocol = "TCP") # port number should be an int
	}
)
add_service(service_id = service_id, service_config = service_config)
`

	scriptOutput, interpretationError, instructions := interpreter.Interpret(context.Background(), script)
	require.Equal(t, 0, len(instructions))
	require.Empty(t, scriptOutput)
	expectedError := startosis_errors.NewInterpretationErrorWithCustomMsg(
		"Evaluation error: Argument 'number' is expected to be an integer. Got starlark.String",
		[]startosis_errors.CallFrame{
			*startosis_errors.NewCallFrame("<toplevel>", startosis_errors.NewScriptPosition(13, 12)),
			*startosis_errors.NewCallFrame("add_service", startosis_errors.NewScriptPosition(0, 0)),
		},
	)
	require.Equal(t, expectedError, interpretationError)
}

func TestStartosisCompiler_ValidScriptWithMultipleInstructions(t *testing.T) {
	interpreter := NewStartosisInterpreter(nil, emptyMockPackageManager())
	script := `
print("Starting Startosis script!")

service_id = "example-datastore-server"
ports = [1323, 1324, 1325]

def deploy_datastore_services():
    for i in range(len(ports)):
        unique_service_id = service_id + "-" + str(i)
        print("Adding service " + unique_service_id)
        service_config = struct(
			container_image_name = "kurtosistech/example-datastore-server",
			used_ports = {
				"grpc": struct(
					number = ports[i],
					protocol = "TCP"
				)
			}
		)
        add_service(service_id = unique_service_id, service_config = service_config)

deploy_datastore_services()
print("Done!")
`

	scriptOutput, interpretationError, instructions := interpreter.Interpret(context.Background(), script)
	require.Equal(t, 3, len(instructions))
	require.Nil(t, interpretationError)

	addServiceInstruction0 := add_service.NewAddServiceInstruction(
		nil,
		*kurtosis_instruction.NewInstructionPosition(22, 26),
		service.ServiceID("example-datastore-server-0"),
		&kurtosis_core_rpc_api_bindings.ServiceConfig{
			ContainerImageName: "kurtosistech/example-datastore-server",
			PrivatePorts: map[string]*kurtosis_core_rpc_api_bindings.Port{
				"grpc": {
					Number:   1323,
					Protocol: kurtosis_core_rpc_api_bindings.Port_TCP,
				},
			},
		})
	addServiceInstruction1 := add_service.NewAddServiceInstruction(
		nil,
		*kurtosis_instruction.NewInstructionPosition(22, 26),
		service.ServiceID("example-datastore-server-1"),
		&kurtosis_core_rpc_api_bindings.ServiceConfig{
			ContainerImageName: "kurtosistech/example-datastore-server",
			PrivatePorts: map[string]*kurtosis_core_rpc_api_bindings.Port{
				"grpc": {
					Number:   1324,
					Protocol: kurtosis_core_rpc_api_bindings.Port_TCP,
				},
			},
		})
	addServiceInstruction2 := add_service.NewAddServiceInstruction(
		nil,
		*kurtosis_instruction.NewInstructionPosition(22, 26),
		service.ServiceID("example-datastore-server-2"),
		&kurtosis_core_rpc_api_bindings.ServiceConfig{
			ContainerImageName: "kurtosistech/example-datastore-server",
			PrivatePorts: map[string]*kurtosis_core_rpc_api_bindings.Port{
				"grpc": {
					Number:   1325,
					Protocol: kurtosis_core_rpc_api_bindings.Port_TCP,
				},
			},
		})

	require.Equal(t, instructions[0], addServiceInstruction0)
	require.Equal(t, instructions[1], addServiceInstruction1)
	require.Equal(t, instructions[2], addServiceInstruction2)

	expectedOutput := `Starting Startosis script!
Adding service example-datastore-server-0
Adding service example-datastore-server-1
Adding service example-datastore-server-2
Done!
`
	require.Equal(t, expectedOutput, string(scriptOutput))
}

func TestStartosisCompiler_SimpleLoading(t *testing.T) {
	seedModules := make(map[string]string)
	seedModules["github.com/foo/bar/lib.tar"] = "a=\"World!\""
	moduleManager := module_manager.NewMockModuleManager(seedModules)
	interpreter := NewStartosisInterpreter(nil, moduleManager)
	script := `
load("github.com/foo/bar/lib.tar", "a")
print("Hello " + a)

`

	scriptOutput, interpretationError, instructions := interpreter.Interpret(context.Background(), script)
	assert.Equal(t, 0, len(instructions)) // No kurtosis instruction
	assert.Nil(t, interpretationError)

	expectedOutput := `Hello World!
`
	assert.Equal(t, expectedOutput, scriptOutput)
}

