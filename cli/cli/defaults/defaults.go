/*
 * Copyright (c) 2021 - present Kurtosis Technologies Inc.
 * All Rights Reserved.
 */

package defaults

import (
	"github.com/kurtosis-tech/kurtosis-core/commons/kurtosis_core_version"
	"github.com/kurtosis-tech/kurtosis-engine-server/engine/kurtosis_engine_server_version"
)

const (
	kurtosisDockerOrg = "kurtosistech"
	// vvvv WARNING: DO NOT MODIFY THIS MANUALLY! IT WILL BE UPDATED DURING THE RELEASE PROCESS vvvvv
	// Own version, so that we can start the proper Javascript REPL Docker image
	ownVersion = "0.4.2"
	// ^^^^ WARNING: DO NOT MODIFY THIS MANUALLY! IT WILL BE UPDATED DURING THE RELEASE PROCESS ^^^^^

	DefaultJavascriptReplImage = kurtosisDockerOrg + "/javascript-interactive-repl:" + ownVersion

	DefaultApiContainerImage = kurtosisDockerOrg + "/kurtosis-core_api:" + kurtosis_core_version.KurtosisCoreVersion

	DefaultEngineImage = kurtosisDockerOrg + "/kurtosis-engine-server:" + kurtosis_engine_server_version.KurtosisEngineServerVersion
)
