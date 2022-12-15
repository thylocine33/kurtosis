package set_connection

import (
	"github.com/kurtosis-tech/kurtosis/core/server/api_container/server/service_network/partition_topology"
	"github.com/kurtosis-tech/kurtosis/core/server/api_container/server/service_network/service_network_types"
	"github.com/kurtosis-tech/kurtosis/core/server/api_container/server/startosis_engine/kurtosis_instruction"
	"github.com/kurtosis-tech/kurtosis/core/server/api_container/server/startosis_engine/kurtosis_types"
	"github.com/kurtosis-tech/kurtosis/core/server/api_container/server/startosis_engine/startosis_constants"
	"github.com/stretchr/testify/require"
	"go.starlark.net/starlark"
	"testing"
)

func TestSetService_Interpreter(t *testing.T) {
	var instructions []kurtosis_instruction.KurtosisInstruction
	starlarkInstruction := `set_connection(("subnetwork1", "subnetwork2"), ConnectionConfig(50.0))`
	_, err := starlark.ExecFile(newThread(), startosis_constants.PackageIdPlaceholderForStandaloneScript, starlarkInstruction, starlark.StringDict{
		kurtosis_types.ConnectionConfigTypeName: starlark.NewBuiltin(kurtosis_types.ConnectionConfigTypeName, kurtosis_types.MakeConnectionConfig),
		SetConnectionBuiltinName:                starlark.NewBuiltin(SetConnectionBuiltinName, GenerateSetConnectionBuiltin(&instructions, nil)),
	})
	require.Nil(t, err)

	require.Len(t, instructions, 1)
	subnetwork1 := service_network_types.PartitionID("subnetwork1")
	subnetwork2 := service_network_types.PartitionID("subnetwork2")
	expectedInstruction := NewSetConnectionInstruction(
		nil,
		kurtosis_instruction.NewInstructionPosition(1, 15, startosis_constants.PackageIdPlaceholderForStandaloneScript),
		&subnetwork1,
		&subnetwork2,
		partition_topology.NewPartitionConnection(50),
		starlark.StringDict{
			"config": kurtosis_types.NewConnectionConfig(50),
			"subnetworks": starlark.Tuple([]starlark.Value{
				starlark.String("subnetwork1"),
				starlark.String("subnetwork2"),
			}),
		})
	require.Equal(t, expectedInstruction, instructions[0])
}

func TestSetService_Interpreter_SetDefaultConnection(t *testing.T) {
	var instructions []kurtosis_instruction.KurtosisInstruction
	starlarkInstruction := `set_connection(ConnectionConfig(50.0))`
	_, err := starlark.ExecFile(newThread(), startosis_constants.PackageIdPlaceholderForStandaloneScript, starlarkInstruction, starlark.StringDict{
		kurtosis_types.ConnectionConfigTypeName: starlark.NewBuiltin(kurtosis_types.ConnectionConfigTypeName, kurtosis_types.MakeConnectionConfig),
		SetConnectionBuiltinName:                starlark.NewBuiltin(SetConnectionBuiltinName, GenerateSetConnectionBuiltin(&instructions, nil)),
	})
	require.Nil(t, err)

	require.Len(t, instructions, 1)
	expectedInstruction := NewSetConnectionInstruction(
		nil,
		kurtosis_instruction.NewInstructionPosition(1, 15, startosis_constants.PackageIdPlaceholderForStandaloneScript),
		nil,
		nil,
		partition_topology.NewPartitionConnection(50),
		starlark.StringDict{
			"config": kurtosis_types.NewConnectionConfig(50),
		})
	require.Equal(t, expectedInstruction, instructions[0])
}

func TestSetConnection_GetCanonicalizedInstruction(t *testing.T) {
	subnetwork1 := "subnetwork1"
	subnetwork2 := "subnetwork2"

	connectionConfig := kurtosis_types.NewConnectionConfig(50)
	subnetworks := starlark.Tuple([]starlark.Value{
		starlark.String(subnetwork1),
		starlark.String(subnetwork2),
	})
	setConnectionInstruction := newEmptySetConnectionInstruction(
		nil,
		kurtosis_instruction.NewInstructionPosition(22, 26, "dummyFile"),
	)
	setConnectionInstruction.starlarkKwargs[subnetworksArgName] = subnetworks
	setConnectionInstruction.starlarkKwargs[connectionConfigArgName] = connectionConfig

	expectedOutput := `set_connection(config=ConnectionConfig(packet_loss_percentage=50.0), subnetworks=("subnetwork1", "subnetwork2"))`
	require.Equal(t, expectedOutput, setConnectionInstruction.String())
}

func TestSetConnection_GetCanonicalizedInstruction_NoSubnetworks(t *testing.T) {
	connectionConfig := kurtosis_types.NewConnectionConfig(50)
	setConnectionInstruction := newEmptySetConnectionInstruction(
		nil,
		kurtosis_instruction.NewInstructionPosition(22, 26, "dummyFile"),
	)
	setConnectionInstruction.starlarkKwargs[connectionConfigArgName] = connectionConfig

	expectedOutput := `set_connection(config=ConnectionConfig(packet_loss_percentage=50.0))`
	require.Equal(t, expectedOutput, setConnectionInstruction.String())
}

func TestSetConnection_SerializeAndParseAgain(t *testing.T) {
	subnetwork1 := service_network_types.PartitionID("subnetwork1")
	subnetwork2 := service_network_types.PartitionID("subnetwork2")
	initialInstruction := NewSetConnectionInstruction(
		nil,
		kurtosis_instruction.NewInstructionPosition(1, 15, startosis_constants.PackageIdPlaceholderForStandaloneScript),
		&subnetwork1,
		&subnetwork2,
		partition_topology.NewPartitionConnection(50),
		starlark.StringDict{
			"config": kurtosis_types.NewConnectionConfig(50),
			"subnetworks": starlark.Tuple([]starlark.Value{
				starlark.String("subnetwork1"),
				starlark.String("subnetwork2"),
			}),
		})

	canonicalizedInstruction := initialInstruction.String()

	var instructions []kurtosis_instruction.KurtosisInstruction
	_, err := starlark.ExecFile(newThread(), startosis_constants.PackageIdPlaceholderForStandaloneScript, canonicalizedInstruction, starlark.StringDict{
		kurtosis_types.ConnectionConfigTypeName: starlark.NewBuiltin(kurtosis_types.ConnectionConfigTypeName, kurtosis_types.MakeConnectionConfig),
		SetConnectionBuiltinName:                starlark.NewBuiltin(SetConnectionBuiltinName, GenerateSetConnectionBuiltin(&instructions, nil)),
	})
	require.Nil(t, err)

	require.Len(t, instructions, 1)
	require.Equal(t, initialInstruction, instructions[0])
}

func TestSetConnection_SerializeAndParseAgain_DefaultConnection(t *testing.T) {
	initialInstruction := NewSetConnectionInstruction(
		nil,
		kurtosis_instruction.NewInstructionPosition(1, 15, startosis_constants.PackageIdPlaceholderForStandaloneScript),
		nil,
		nil,
		partition_topology.NewPartitionConnection(50),
		starlark.StringDict{
			"config": kurtosis_types.NewConnectionConfig(50),
		})

	canonicalizedInstruction := initialInstruction.String()

	var instructions []kurtosis_instruction.KurtosisInstruction
	_, err := starlark.ExecFile(newThread(), startosis_constants.PackageIdPlaceholderForStandaloneScript, canonicalizedInstruction, starlark.StringDict{
		kurtosis_types.ConnectionConfigTypeName: starlark.NewBuiltin(kurtosis_types.ConnectionConfigTypeName, kurtosis_types.MakeConnectionConfig),
		SetConnectionBuiltinName:                starlark.NewBuiltin(SetConnectionBuiltinName, GenerateSetConnectionBuiltin(&instructions, nil)),
	})
	require.Nil(t, err)

	require.Len(t, instructions, 1)
	require.Equal(t, initialInstruction, instructions[0])
}

func newThread() *starlark.Thread {
	return &starlark.Thread{
		Name:       "Test thread",
		Print:      nil,
		Load:       nil,
		OnMaxSteps: nil,
	}
}
