// source: api_container_service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.api_container_api.ConstantFactRecipe', null, global);
goog.exportSymbol('proto.api_container_api.DefineFactArgs', null, global);
goog.exportSymbol('proto.api_container_api.DefineFactResponse', null, global);
goog.exportSymbol('proto.api_container_api.DownloadFilesArtifactArgs', null, global);
goog.exportSymbol('proto.api_container_api.DownloadFilesArtifactResponse', null, global);
goog.exportSymbol('proto.api_container_api.ExecCommandArgs', null, global);
goog.exportSymbol('proto.api_container_api.ExecCommandResponse', null, global);
goog.exportSymbol('proto.api_container_api.ExecFactRecipe', null, global);
goog.exportSymbol('proto.api_container_api.ExecuteModuleArgs', null, global);
goog.exportSymbol('proto.api_container_api.ExecuteModuleResponse', null, global);
goog.exportSymbol('proto.api_container_api.ExecuteStartosisModuleArgs', null, global);
goog.exportSymbol('proto.api_container_api.ExecuteStartosisRemoteModuleArgs', null, global);
goog.exportSymbol('proto.api_container_api.ExecuteStartosisResponse', null, global);
goog.exportSymbol('proto.api_container_api.ExecuteStartosisResponse.KurtosisErrorCase', null, global);
goog.exportSymbol('proto.api_container_api.ExecuteStartosisScriptArgs', null, global);
goog.exportSymbol('proto.api_container_api.FactRecipe', null, global);
goog.exportSymbol('proto.api_container_api.FactRecipe.FactRecipeDefinitionCase', null, global);
goog.exportSymbol('proto.api_container_api.FactValue', null, global);
goog.exportSymbol('proto.api_container_api.FactValue.FactValueCase', null, global);
goog.exportSymbol('proto.api_container_api.GetFactValuesArgs', null, global);
goog.exportSymbol('proto.api_container_api.GetFactValuesResponse', null, global);
goog.exportSymbol('proto.api_container_api.GetModulesArgs', null, global);
goog.exportSymbol('proto.api_container_api.GetModulesResponse', null, global);
goog.exportSymbol('proto.api_container_api.GetServicesArgs', null, global);
goog.exportSymbol('proto.api_container_api.GetServicesResponse', null, global);
goog.exportSymbol('proto.api_container_api.HttpRequestFactRecipe', null, global);
goog.exportSymbol('proto.api_container_api.HttpRequestMethod', null, global);
goog.exportSymbol('proto.api_container_api.KurtosisExecutionError', null, global);
goog.exportSymbol('proto.api_container_api.KurtosisInterpretationError', null, global);
goog.exportSymbol('proto.api_container_api.KurtosisValidationError', null, global);
goog.exportSymbol('proto.api_container_api.KurtosisValidationErrors', null, global);
goog.exportSymbol('proto.api_container_api.LoadModuleArgs', null, global);
goog.exportSymbol('proto.api_container_api.LoadModuleResponse', null, global);
goog.exportSymbol('proto.api_container_api.ModuleInfo', null, global);
goog.exportSymbol('proto.api_container_api.PartitionConnectionInfo', null, global);
goog.exportSymbol('proto.api_container_api.PartitionConnections', null, global);
goog.exportSymbol('proto.api_container_api.PartitionServices', null, global);
goog.exportSymbol('proto.api_container_api.PauseServiceArgs', null, global);
goog.exportSymbol('proto.api_container_api.Port', null, global);
goog.exportSymbol('proto.api_container_api.Port.Protocol', null, global);
goog.exportSymbol('proto.api_container_api.RemoveServiceArgs', null, global);
goog.exportSymbol('proto.api_container_api.RemoveServiceResponse', null, global);
goog.exportSymbol('proto.api_container_api.RenderTemplatesToFilesArtifactArgs', null, global);
goog.exportSymbol('proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData', null, global);
goog.exportSymbol('proto.api_container_api.RenderTemplatesToFilesArtifactResponse', null, global);
goog.exportSymbol('proto.api_container_api.RepartitionArgs', null, global);
goog.exportSymbol('proto.api_container_api.SerializedKurtosisInstruction', null, global);
goog.exportSymbol('proto.api_container_api.ServiceConfig', null, global);
goog.exportSymbol('proto.api_container_api.ServiceInfo', null, global);
goog.exportSymbol('proto.api_container_api.StartServicesArgs', null, global);
goog.exportSymbol('proto.api_container_api.StartServicesResponse', null, global);
goog.exportSymbol('proto.api_container_api.StoreFilesArtifactFromServiceArgs', null, global);
goog.exportSymbol('proto.api_container_api.StoreFilesArtifactFromServiceResponse', null, global);
goog.exportSymbol('proto.api_container_api.StoreWebFilesArtifactArgs', null, global);
goog.exportSymbol('proto.api_container_api.StoreWebFilesArtifactResponse', null, global);
goog.exportSymbol('proto.api_container_api.UnloadModuleArgs', null, global);
goog.exportSymbol('proto.api_container_api.UnloadModuleResponse', null, global);
goog.exportSymbol('proto.api_container_api.UnpauseServiceArgs', null, global);
goog.exportSymbol('proto.api_container_api.UploadFilesArtifactArgs', null, global);
goog.exportSymbol('proto.api_container_api.UploadFilesArtifactResponse', null, global);
goog.exportSymbol('proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs', null, global);
goog.exportSymbol('proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.Port = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.Port, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.Port.displayName = 'proto.api_container_api.Port';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.ServiceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.ServiceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.ServiceInfo.displayName = 'proto.api_container_api.ServiceInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.ServiceConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api_container_api.ServiceConfig.repeatedFields_, null);
};
goog.inherits(proto.api_container_api.ServiceConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.ServiceConfig.displayName = 'proto.api_container_api.ServiceConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.ModuleInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.ModuleInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.ModuleInfo.displayName = 'proto.api_container_api.ModuleInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.LoadModuleArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.LoadModuleArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.LoadModuleArgs.displayName = 'proto.api_container_api.LoadModuleArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.LoadModuleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.LoadModuleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.LoadModuleResponse.displayName = 'proto.api_container_api.LoadModuleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.GetModulesArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.GetModulesArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.GetModulesArgs.displayName = 'proto.api_container_api.GetModulesArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.GetModulesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.GetModulesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.GetModulesResponse.displayName = 'proto.api_container_api.GetModulesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.UnloadModuleArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.UnloadModuleArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.UnloadModuleArgs.displayName = 'proto.api_container_api.UnloadModuleArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.UnloadModuleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.UnloadModuleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.UnloadModuleResponse.displayName = 'proto.api_container_api.UnloadModuleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.ExecuteModuleArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.ExecuteModuleArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.ExecuteModuleArgs.displayName = 'proto.api_container_api.ExecuteModuleArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.ExecuteModuleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.ExecuteModuleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.ExecuteModuleResponse.displayName = 'proto.api_container_api.ExecuteModuleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.ExecuteStartosisScriptArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.ExecuteStartosisScriptArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.ExecuteStartosisScriptArgs.displayName = 'proto.api_container_api.ExecuteStartosisScriptArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.ExecuteStartosisRemoteModuleArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.ExecuteStartosisRemoteModuleArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.ExecuteStartosisRemoteModuleArgs.displayName = 'proto.api_container_api.ExecuteStartosisRemoteModuleArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.ExecuteStartosisModuleArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.ExecuteStartosisModuleArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.ExecuteStartosisModuleArgs.displayName = 'proto.api_container_api.ExecuteStartosisModuleArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.ExecuteStartosisResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api_container_api.ExecuteStartosisResponse.repeatedFields_, proto.api_container_api.ExecuteStartosisResponse.oneofGroups_);
};
goog.inherits(proto.api_container_api.ExecuteStartosisResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.ExecuteStartosisResponse.displayName = 'proto.api_container_api.ExecuteStartosisResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.KurtosisInterpretationError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.KurtosisInterpretationError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.KurtosisInterpretationError.displayName = 'proto.api_container_api.KurtosisInterpretationError';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.KurtosisValidationErrors = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api_container_api.KurtosisValidationErrors.repeatedFields_, null);
};
goog.inherits(proto.api_container_api.KurtosisValidationErrors, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.KurtosisValidationErrors.displayName = 'proto.api_container_api.KurtosisValidationErrors';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.KurtosisValidationError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.KurtosisValidationError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.KurtosisValidationError.displayName = 'proto.api_container_api.KurtosisValidationError';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.KurtosisExecutionError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.KurtosisExecutionError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.KurtosisExecutionError.displayName = 'proto.api_container_api.KurtosisExecutionError';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.SerializedKurtosisInstruction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.SerializedKurtosisInstruction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.SerializedKurtosisInstruction.displayName = 'proto.api_container_api.SerializedKurtosisInstruction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.StartServicesArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.StartServicesArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.StartServicesArgs.displayName = 'proto.api_container_api.StartServicesArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.StartServicesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.StartServicesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.StartServicesResponse.displayName = 'proto.api_container_api.StartServicesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.GetServicesArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.GetServicesArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.GetServicesArgs.displayName = 'proto.api_container_api.GetServicesArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.GetServicesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.GetServicesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.GetServicesResponse.displayName = 'proto.api_container_api.GetServicesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.RemoveServiceArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.RemoveServiceArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.RemoveServiceArgs.displayName = 'proto.api_container_api.RemoveServiceArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.RemoveServiceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.RemoveServiceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.RemoveServiceResponse.displayName = 'proto.api_container_api.RemoveServiceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.RepartitionArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.RepartitionArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.RepartitionArgs.displayName = 'proto.api_container_api.RepartitionArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.PartitionServices = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.PartitionServices, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.PartitionServices.displayName = 'proto.api_container_api.PartitionServices';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.PartitionConnections = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.PartitionConnections, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.PartitionConnections.displayName = 'proto.api_container_api.PartitionConnections';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.PartitionConnectionInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.PartitionConnectionInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.PartitionConnectionInfo.displayName = 'proto.api_container_api.PartitionConnectionInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.ExecCommandArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api_container_api.ExecCommandArgs.repeatedFields_, null);
};
goog.inherits(proto.api_container_api.ExecCommandArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.ExecCommandArgs.displayName = 'proto.api_container_api.ExecCommandArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.PauseServiceArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.PauseServiceArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.PauseServiceArgs.displayName = 'proto.api_container_api.PauseServiceArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.UnpauseServiceArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.UnpauseServiceArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.UnpauseServiceArgs.displayName = 'proto.api_container_api.UnpauseServiceArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.ExecCommandResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.ExecCommandResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.ExecCommandResponse.displayName = 'proto.api_container_api.ExecCommandResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs.displayName = 'proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs.displayName = 'proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.UploadFilesArtifactArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.UploadFilesArtifactArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.UploadFilesArtifactArgs.displayName = 'proto.api_container_api.UploadFilesArtifactArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.UploadFilesArtifactResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.UploadFilesArtifactResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.UploadFilesArtifactResponse.displayName = 'proto.api_container_api.UploadFilesArtifactResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.DownloadFilesArtifactArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.DownloadFilesArtifactArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.DownloadFilesArtifactArgs.displayName = 'proto.api_container_api.DownloadFilesArtifactArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.DownloadFilesArtifactResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.DownloadFilesArtifactResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.DownloadFilesArtifactResponse.displayName = 'proto.api_container_api.DownloadFilesArtifactResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.StoreWebFilesArtifactArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.StoreWebFilesArtifactArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.StoreWebFilesArtifactArgs.displayName = 'proto.api_container_api.StoreWebFilesArtifactArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.StoreWebFilesArtifactResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.StoreWebFilesArtifactResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.StoreWebFilesArtifactResponse.displayName = 'proto.api_container_api.StoreWebFilesArtifactResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.StoreFilesArtifactFromServiceArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.StoreFilesArtifactFromServiceArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.StoreFilesArtifactFromServiceArgs.displayName = 'proto.api_container_api.StoreFilesArtifactFromServiceArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.StoreFilesArtifactFromServiceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.StoreFilesArtifactFromServiceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.StoreFilesArtifactFromServiceResponse.displayName = 'proto.api_container_api.StoreFilesArtifactFromServiceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.RenderTemplatesToFilesArtifactArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.RenderTemplatesToFilesArtifactArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.RenderTemplatesToFilesArtifactArgs.displayName = 'proto.api_container_api.RenderTemplatesToFilesArtifactArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData.displayName = 'proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.RenderTemplatesToFilesArtifactResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.RenderTemplatesToFilesArtifactResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.RenderTemplatesToFilesArtifactResponse.displayName = 'proto.api_container_api.RenderTemplatesToFilesArtifactResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.DefineFactArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.DefineFactArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.DefineFactArgs.displayName = 'proto.api_container_api.DefineFactArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.DefineFactResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.DefineFactResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.DefineFactResponse.displayName = 'proto.api_container_api.DefineFactResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.GetFactValuesArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.GetFactValuesArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.GetFactValuesArgs.displayName = 'proto.api_container_api.GetFactValuesArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.GetFactValuesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api_container_api.GetFactValuesResponse.repeatedFields_, null);
};
goog.inherits(proto.api_container_api.GetFactValuesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.GetFactValuesResponse.displayName = 'proto.api_container_api.GetFactValuesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.FactValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api_container_api.FactValue.oneofGroups_);
};
goog.inherits(proto.api_container_api.FactValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.FactValue.displayName = 'proto.api_container_api.FactValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.ConstantFactRecipe = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.ConstantFactRecipe, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.ConstantFactRecipe.displayName = 'proto.api_container_api.ConstantFactRecipe';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.ExecFactRecipe = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api_container_api.ExecFactRecipe.repeatedFields_, null);
};
goog.inherits(proto.api_container_api.ExecFactRecipe, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.ExecFactRecipe.displayName = 'proto.api_container_api.ExecFactRecipe';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.HttpRequestFactRecipe = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_container_api.HttpRequestFactRecipe, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.HttpRequestFactRecipe.displayName = 'proto.api_container_api.HttpRequestFactRecipe';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_container_api.FactRecipe = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api_container_api.FactRecipe.oneofGroups_);
};
goog.inherits(proto.api_container_api.FactRecipe, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_container_api.FactRecipe.displayName = 'proto.api_container_api.FactRecipe';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.Port.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.Port.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.Port} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.Port.toObject = function(includeInstance, msg) {
  var f, obj = {
    number: jspb.Message.getFieldWithDefault(msg, 1, 0),
    protocol: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.Port}
 */
proto.api_container_api.Port.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.Port;
  return proto.api_container_api.Port.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.Port} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.Port}
 */
proto.api_container_api.Port.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumber(value);
      break;
    case 2:
      var value = /** @type {!proto.api_container_api.Port.Protocol} */ (reader.readEnum());
      msg.setProtocol(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.Port.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.Port.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.Port} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.Port.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumber();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getProtocol();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.api_container_api.Port.Protocol = {
  TCP: 0,
  SCTP: 1,
  UDP: 2
};

/**
 * optional uint32 number = 1;
 * @return {number}
 */
proto.api_container_api.Port.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api_container_api.Port} returns this
 */
proto.api_container_api.Port.prototype.setNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Protocol protocol = 2;
 * @return {!proto.api_container_api.Port.Protocol}
 */
proto.api_container_api.Port.prototype.getProtocol = function() {
  return /** @type {!proto.api_container_api.Port.Protocol} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.api_container_api.Port.Protocol} value
 * @return {!proto.api_container_api.Port} returns this
 */
proto.api_container_api.Port.prototype.setProtocol = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.ServiceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.ServiceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.ServiceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.ServiceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceGuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    privateIpAddr: jspb.Message.getFieldWithDefault(msg, 2, ""),
    privatePortsMap: (f = msg.getPrivatePortsMap()) ? f.toObject(includeInstance, proto.api_container_api.Port.toObject) : [],
    maybePublicIpAddr: jspb.Message.getFieldWithDefault(msg, 4, ""),
    maybePublicPortsMap: (f = msg.getMaybePublicPortsMap()) ? f.toObject(includeInstance, proto.api_container_api.Port.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.ServiceInfo}
 */
proto.api_container_api.ServiceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.ServiceInfo;
  return proto.api_container_api.ServiceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.ServiceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.ServiceInfo}
 */
proto.api_container_api.ServiceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceGuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrivateIpAddr(value);
      break;
    case 3:
      var value = msg.getPrivatePortsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api_container_api.Port.deserializeBinaryFromReader, "", new proto.api_container_api.Port());
         });
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaybePublicIpAddr(value);
      break;
    case 5:
      var value = msg.getMaybePublicPortsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api_container_api.Port.deserializeBinaryFromReader, "", new proto.api_container_api.Port());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.ServiceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.ServiceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.ServiceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.ServiceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrivateIpAddr();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrivatePortsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api_container_api.Port.serializeBinaryToWriter);
  }
  f = message.getMaybePublicIpAddr();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMaybePublicPortsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api_container_api.Port.serializeBinaryToWriter);
  }
};


/**
 * optional string service_guid = 1;
 * @return {string}
 */
proto.api_container_api.ServiceInfo.prototype.getServiceGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.ServiceInfo} returns this
 */
proto.api_container_api.ServiceInfo.prototype.setServiceGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string private_ip_addr = 2;
 * @return {string}
 */
proto.api_container_api.ServiceInfo.prototype.getPrivateIpAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.ServiceInfo} returns this
 */
proto.api_container_api.ServiceInfo.prototype.setPrivateIpAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, Port> private_ports = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api_container_api.Port>}
 */
proto.api_container_api.ServiceInfo.prototype.getPrivatePortsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api_container_api.Port>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.api_container_api.Port));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api_container_api.ServiceInfo} returns this
 */
proto.api_container_api.ServiceInfo.prototype.clearPrivatePortsMap = function() {
  this.getPrivatePortsMap().clear();
  return this;};


/**
 * optional string maybe_public_ip_addr = 4;
 * @return {string}
 */
proto.api_container_api.ServiceInfo.prototype.getMaybePublicIpAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.ServiceInfo} returns this
 */
proto.api_container_api.ServiceInfo.prototype.setMaybePublicIpAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * map<string, Port> maybe_public_ports = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api_container_api.Port>}
 */
proto.api_container_api.ServiceInfo.prototype.getMaybePublicPortsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api_container_api.Port>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      proto.api_container_api.Port));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api_container_api.ServiceInfo} returns this
 */
proto.api_container_api.ServiceInfo.prototype.clearMaybePublicPortsMap = function() {
  this.getMaybePublicPortsMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api_container_api.ServiceConfig.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.ServiceConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.ServiceConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.ServiceConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.ServiceConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    containerImageName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    privatePortsMap: (f = msg.getPrivatePortsMap()) ? f.toObject(includeInstance, proto.api_container_api.Port.toObject) : [],
    publicPortsMap: (f = msg.getPublicPortsMap()) ? f.toObject(includeInstance, proto.api_container_api.Port.toObject) : [],
    entrypointArgsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    cmdArgsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    envVarsMap: (f = msg.getEnvVarsMap()) ? f.toObject(includeInstance, undefined) : [],
    filesArtifactMountpointsMap: (f = msg.getFilesArtifactMountpointsMap()) ? f.toObject(includeInstance, undefined) : [],
    cpuAllocationMillicpus: jspb.Message.getFieldWithDefault(msg, 8, 0),
    memoryAllocationMegabytes: jspb.Message.getFieldWithDefault(msg, 9, 0),
    privateIpAddrPlaceholder: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.ServiceConfig}
 */
proto.api_container_api.ServiceConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.ServiceConfig;
  return proto.api_container_api.ServiceConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.ServiceConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.ServiceConfig}
 */
proto.api_container_api.ServiceConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContainerImageName(value);
      break;
    case 2:
      var value = msg.getPrivatePortsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api_container_api.Port.deserializeBinaryFromReader, "", new proto.api_container_api.Port());
         });
      break;
    case 3:
      var value = msg.getPublicPortsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api_container_api.Port.deserializeBinaryFromReader, "", new proto.api_container_api.Port());
         });
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addEntrypointArgs(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addCmdArgs(value);
      break;
    case 6:
      var value = msg.getEnvVarsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 7:
      var value = msg.getFilesArtifactMountpointsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCpuAllocationMillicpus(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMemoryAllocationMegabytes(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrivateIpAddrPlaceholder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.ServiceConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.ServiceConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.ServiceConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.ServiceConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContainerImageName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrivatePortsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api_container_api.Port.serializeBinaryToWriter);
  }
  f = message.getPublicPortsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api_container_api.Port.serializeBinaryToWriter);
  }
  f = message.getEntrypointArgsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getCmdArgsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getEnvVarsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getFilesArtifactMountpointsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getCpuAllocationMillicpus();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getMemoryAllocationMegabytes();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getPrivateIpAddrPlaceholder();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string container_image_name = 1;
 * @return {string}
 */
proto.api_container_api.ServiceConfig.prototype.getContainerImageName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.ServiceConfig} returns this
 */
proto.api_container_api.ServiceConfig.prototype.setContainerImageName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, Port> private_ports = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api_container_api.Port>}
 */
proto.api_container_api.ServiceConfig.prototype.getPrivatePortsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api_container_api.Port>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.api_container_api.Port));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api_container_api.ServiceConfig} returns this
 */
proto.api_container_api.ServiceConfig.prototype.clearPrivatePortsMap = function() {
  this.getPrivatePortsMap().clear();
  return this;};


/**
 * map<string, Port> public_ports = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api_container_api.Port>}
 */
proto.api_container_api.ServiceConfig.prototype.getPublicPortsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api_container_api.Port>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.api_container_api.Port));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api_container_api.ServiceConfig} returns this
 */
proto.api_container_api.ServiceConfig.prototype.clearPublicPortsMap = function() {
  this.getPublicPortsMap().clear();
  return this;};


/**
 * repeated string entrypoint_args = 4;
 * @return {!Array<string>}
 */
proto.api_container_api.ServiceConfig.prototype.getEntrypointArgsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api_container_api.ServiceConfig} returns this
 */
proto.api_container_api.ServiceConfig.prototype.setEntrypointArgsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api_container_api.ServiceConfig} returns this
 */
proto.api_container_api.ServiceConfig.prototype.addEntrypointArgs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api_container_api.ServiceConfig} returns this
 */
proto.api_container_api.ServiceConfig.prototype.clearEntrypointArgsList = function() {
  return this.setEntrypointArgsList([]);
};


/**
 * repeated string cmd_args = 5;
 * @return {!Array<string>}
 */
proto.api_container_api.ServiceConfig.prototype.getCmdArgsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api_container_api.ServiceConfig} returns this
 */
proto.api_container_api.ServiceConfig.prototype.setCmdArgsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api_container_api.ServiceConfig} returns this
 */
proto.api_container_api.ServiceConfig.prototype.addCmdArgs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api_container_api.ServiceConfig} returns this
 */
proto.api_container_api.ServiceConfig.prototype.clearCmdArgsList = function() {
  return this.setCmdArgsList([]);
};


/**
 * map<string, string> env_vars = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.api_container_api.ServiceConfig.prototype.getEnvVarsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api_container_api.ServiceConfig} returns this
 */
proto.api_container_api.ServiceConfig.prototype.clearEnvVarsMap = function() {
  this.getEnvVarsMap().clear();
  return this;};


/**
 * map<string, string> files_artifact_mountpoints = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.api_container_api.ServiceConfig.prototype.getFilesArtifactMountpointsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api_container_api.ServiceConfig} returns this
 */
proto.api_container_api.ServiceConfig.prototype.clearFilesArtifactMountpointsMap = function() {
  this.getFilesArtifactMountpointsMap().clear();
  return this;};


/**
 * optional uint64 cpu_allocation_millicpus = 8;
 * @return {number}
 */
proto.api_container_api.ServiceConfig.prototype.getCpuAllocationMillicpus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api_container_api.ServiceConfig} returns this
 */
proto.api_container_api.ServiceConfig.prototype.setCpuAllocationMillicpus = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint64 memory_allocation_megabytes = 9;
 * @return {number}
 */
proto.api_container_api.ServiceConfig.prototype.getMemoryAllocationMegabytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.api_container_api.ServiceConfig} returns this
 */
proto.api_container_api.ServiceConfig.prototype.setMemoryAllocationMegabytes = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string private_ip_addr_placeholder = 10;
 * @return {string}
 */
proto.api_container_api.ServiceConfig.prototype.getPrivateIpAddrPlaceholder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.ServiceConfig} returns this
 */
proto.api_container_api.ServiceConfig.prototype.setPrivateIpAddrPlaceholder = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.ModuleInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.ModuleInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.ModuleInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.ModuleInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    guid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    privateIpAddr: jspb.Message.getFieldWithDefault(msg, 2, ""),
    privateGrpcPort: (f = msg.getPrivateGrpcPort()) && proto.api_container_api.Port.toObject(includeInstance, f),
    maybePublicIpAddr: jspb.Message.getFieldWithDefault(msg, 4, ""),
    maybePublicGrpcPort: (f = msg.getMaybePublicGrpcPort()) && proto.api_container_api.Port.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.ModuleInfo}
 */
proto.api_container_api.ModuleInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.ModuleInfo;
  return proto.api_container_api.ModuleInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.ModuleInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.ModuleInfo}
 */
proto.api_container_api.ModuleInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrivateIpAddr(value);
      break;
    case 3:
      var value = new proto.api_container_api.Port;
      reader.readMessage(value,proto.api_container_api.Port.deserializeBinaryFromReader);
      msg.setPrivateGrpcPort(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaybePublicIpAddr(value);
      break;
    case 5:
      var value = new proto.api_container_api.Port;
      reader.readMessage(value,proto.api_container_api.Port.deserializeBinaryFromReader);
      msg.setMaybePublicGrpcPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.ModuleInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.ModuleInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.ModuleInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.ModuleInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrivateIpAddr();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrivateGrpcPort();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api_container_api.Port.serializeBinaryToWriter
    );
  }
  f = message.getMaybePublicIpAddr();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMaybePublicGrpcPort();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api_container_api.Port.serializeBinaryToWriter
    );
  }
};


/**
 * optional string guid = 1;
 * @return {string}
 */
proto.api_container_api.ModuleInfo.prototype.getGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.ModuleInfo} returns this
 */
proto.api_container_api.ModuleInfo.prototype.setGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string private_ip_addr = 2;
 * @return {string}
 */
proto.api_container_api.ModuleInfo.prototype.getPrivateIpAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.ModuleInfo} returns this
 */
proto.api_container_api.ModuleInfo.prototype.setPrivateIpAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Port private_grpc_port = 3;
 * @return {?proto.api_container_api.Port}
 */
proto.api_container_api.ModuleInfo.prototype.getPrivateGrpcPort = function() {
  return /** @type{?proto.api_container_api.Port} */ (
    jspb.Message.getWrapperField(this, proto.api_container_api.Port, 3));
};


/**
 * @param {?proto.api_container_api.Port|undefined} value
 * @return {!proto.api_container_api.ModuleInfo} returns this
*/
proto.api_container_api.ModuleInfo.prototype.setPrivateGrpcPort = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_container_api.ModuleInfo} returns this
 */
proto.api_container_api.ModuleInfo.prototype.clearPrivateGrpcPort = function() {
  return this.setPrivateGrpcPort(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_container_api.ModuleInfo.prototype.hasPrivateGrpcPort = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string maybe_public_ip_addr = 4;
 * @return {string}
 */
proto.api_container_api.ModuleInfo.prototype.getMaybePublicIpAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.ModuleInfo} returns this
 */
proto.api_container_api.ModuleInfo.prototype.setMaybePublicIpAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Port maybe_public_grpc_port = 5;
 * @return {?proto.api_container_api.Port}
 */
proto.api_container_api.ModuleInfo.prototype.getMaybePublicGrpcPort = function() {
  return /** @type{?proto.api_container_api.Port} */ (
    jspb.Message.getWrapperField(this, proto.api_container_api.Port, 5));
};


/**
 * @param {?proto.api_container_api.Port|undefined} value
 * @return {!proto.api_container_api.ModuleInfo} returns this
*/
proto.api_container_api.ModuleInfo.prototype.setMaybePublicGrpcPort = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_container_api.ModuleInfo} returns this
 */
proto.api_container_api.ModuleInfo.prototype.clearMaybePublicGrpcPort = function() {
  return this.setMaybePublicGrpcPort(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_container_api.ModuleInfo.prototype.hasMaybePublicGrpcPort = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.LoadModuleArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.LoadModuleArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.LoadModuleArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.LoadModuleArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    containerImage: jspb.Message.getFieldWithDefault(msg, 2, ""),
    serializedParams: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.LoadModuleArgs}
 */
proto.api_container_api.LoadModuleArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.LoadModuleArgs;
  return proto.api_container_api.LoadModuleArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.LoadModuleArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.LoadModuleArgs}
 */
proto.api_container_api.LoadModuleArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModuleId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContainerImage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSerializedParams(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.LoadModuleArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.LoadModuleArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.LoadModuleArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.LoadModuleArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContainerImage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSerializedParams();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string module_id = 1;
 * @return {string}
 */
proto.api_container_api.LoadModuleArgs.prototype.getModuleId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.LoadModuleArgs} returns this
 */
proto.api_container_api.LoadModuleArgs.prototype.setModuleId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string container_image = 2;
 * @return {string}
 */
proto.api_container_api.LoadModuleArgs.prototype.getContainerImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.LoadModuleArgs} returns this
 */
proto.api_container_api.LoadModuleArgs.prototype.setContainerImage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string serialized_params = 3;
 * @return {string}
 */
proto.api_container_api.LoadModuleArgs.prototype.getSerializedParams = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.LoadModuleArgs} returns this
 */
proto.api_container_api.LoadModuleArgs.prototype.setSerializedParams = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.LoadModuleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.LoadModuleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.LoadModuleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.LoadModuleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    privateIpAddr: jspb.Message.getFieldWithDefault(msg, 1, ""),
    privatePort: (f = msg.getPrivatePort()) && proto.api_container_api.Port.toObject(includeInstance, f),
    publicIpAddr: jspb.Message.getFieldWithDefault(msg, 3, ""),
    publicPort: (f = msg.getPublicPort()) && proto.api_container_api.Port.toObject(includeInstance, f),
    guid: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.LoadModuleResponse}
 */
proto.api_container_api.LoadModuleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.LoadModuleResponse;
  return proto.api_container_api.LoadModuleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.LoadModuleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.LoadModuleResponse}
 */
proto.api_container_api.LoadModuleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrivateIpAddr(value);
      break;
    case 2:
      var value = new proto.api_container_api.Port;
      reader.readMessage(value,proto.api_container_api.Port.deserializeBinaryFromReader);
      msg.setPrivatePort(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicIpAddr(value);
      break;
    case 4:
      var value = new proto.api_container_api.Port;
      reader.readMessage(value,proto.api_container_api.Port.deserializeBinaryFromReader);
      msg.setPublicPort(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.LoadModuleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.LoadModuleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.LoadModuleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.LoadModuleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrivateIpAddr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrivatePort();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api_container_api.Port.serializeBinaryToWriter
    );
  }
  f = message.getPublicIpAddr();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPublicPort();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api_container_api.Port.serializeBinaryToWriter
    );
  }
  f = message.getGuid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string private_ip_addr = 1;
 * @return {string}
 */
proto.api_container_api.LoadModuleResponse.prototype.getPrivateIpAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.LoadModuleResponse} returns this
 */
proto.api_container_api.LoadModuleResponse.prototype.setPrivateIpAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Port private_port = 2;
 * @return {?proto.api_container_api.Port}
 */
proto.api_container_api.LoadModuleResponse.prototype.getPrivatePort = function() {
  return /** @type{?proto.api_container_api.Port} */ (
    jspb.Message.getWrapperField(this, proto.api_container_api.Port, 2));
};


/**
 * @param {?proto.api_container_api.Port|undefined} value
 * @return {!proto.api_container_api.LoadModuleResponse} returns this
*/
proto.api_container_api.LoadModuleResponse.prototype.setPrivatePort = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_container_api.LoadModuleResponse} returns this
 */
proto.api_container_api.LoadModuleResponse.prototype.clearPrivatePort = function() {
  return this.setPrivatePort(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_container_api.LoadModuleResponse.prototype.hasPrivatePort = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string public_ip_addr = 3;
 * @return {string}
 */
proto.api_container_api.LoadModuleResponse.prototype.getPublicIpAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.LoadModuleResponse} returns this
 */
proto.api_container_api.LoadModuleResponse.prototype.setPublicIpAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Port public_port = 4;
 * @return {?proto.api_container_api.Port}
 */
proto.api_container_api.LoadModuleResponse.prototype.getPublicPort = function() {
  return /** @type{?proto.api_container_api.Port} */ (
    jspb.Message.getWrapperField(this, proto.api_container_api.Port, 4));
};


/**
 * @param {?proto.api_container_api.Port|undefined} value
 * @return {!proto.api_container_api.LoadModuleResponse} returns this
*/
proto.api_container_api.LoadModuleResponse.prototype.setPublicPort = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_container_api.LoadModuleResponse} returns this
 */
proto.api_container_api.LoadModuleResponse.prototype.clearPublicPort = function() {
  return this.setPublicPort(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_container_api.LoadModuleResponse.prototype.hasPublicPort = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string guid = 5;
 * @return {string}
 */
proto.api_container_api.LoadModuleResponse.prototype.getGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.LoadModuleResponse} returns this
 */
proto.api_container_api.LoadModuleResponse.prototype.setGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.GetModulesArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.GetModulesArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.GetModulesArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.GetModulesArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    idsMap: (f = msg.getIdsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.GetModulesArgs}
 */
proto.api_container_api.GetModulesArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.GetModulesArgs;
  return proto.api_container_api.GetModulesArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.GetModulesArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.GetModulesArgs}
 */
proto.api_container_api.GetModulesArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getIdsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBool, null, "", false);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.GetModulesArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.GetModulesArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.GetModulesArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.GetModulesArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBool);
  }
};


/**
 * map<string, bool> ids = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,boolean>}
 */
proto.api_container_api.GetModulesArgs.prototype.getIdsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,boolean>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api_container_api.GetModulesArgs} returns this
 */
proto.api_container_api.GetModulesArgs.prototype.clearIdsMap = function() {
  this.getIdsMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.GetModulesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.GetModulesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.GetModulesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.GetModulesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleInfoMap: (f = msg.getModuleInfoMap()) ? f.toObject(includeInstance, proto.api_container_api.ModuleInfo.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.GetModulesResponse}
 */
proto.api_container_api.GetModulesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.GetModulesResponse;
  return proto.api_container_api.GetModulesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.GetModulesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.GetModulesResponse}
 */
proto.api_container_api.GetModulesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getModuleInfoMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api_container_api.ModuleInfo.deserializeBinaryFromReader, "", new proto.api_container_api.ModuleInfo());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.GetModulesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.GetModulesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.GetModulesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.GetModulesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleInfoMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api_container_api.ModuleInfo.serializeBinaryToWriter);
  }
};


/**
 * map<string, ModuleInfo> module_info = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api_container_api.ModuleInfo>}
 */
proto.api_container_api.GetModulesResponse.prototype.getModuleInfoMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api_container_api.ModuleInfo>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.api_container_api.ModuleInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api_container_api.GetModulesResponse} returns this
 */
proto.api_container_api.GetModulesResponse.prototype.clearModuleInfoMap = function() {
  this.getModuleInfoMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.UnloadModuleArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.UnloadModuleArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.UnloadModuleArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.UnloadModuleArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.UnloadModuleArgs}
 */
proto.api_container_api.UnloadModuleArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.UnloadModuleArgs;
  return proto.api_container_api.UnloadModuleArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.UnloadModuleArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.UnloadModuleArgs}
 */
proto.api_container_api.UnloadModuleArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModuleId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.UnloadModuleArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.UnloadModuleArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.UnloadModuleArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.UnloadModuleArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string module_id = 1;
 * @return {string}
 */
proto.api_container_api.UnloadModuleArgs.prototype.getModuleId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.UnloadModuleArgs} returns this
 */
proto.api_container_api.UnloadModuleArgs.prototype.setModuleId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.UnloadModuleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.UnloadModuleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.UnloadModuleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.UnloadModuleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleGuid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.UnloadModuleResponse}
 */
proto.api_container_api.UnloadModuleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.UnloadModuleResponse;
  return proto.api_container_api.UnloadModuleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.UnloadModuleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.UnloadModuleResponse}
 */
proto.api_container_api.UnloadModuleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModuleGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.UnloadModuleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.UnloadModuleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.UnloadModuleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.UnloadModuleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string module_guid = 1;
 * @return {string}
 */
proto.api_container_api.UnloadModuleResponse.prototype.getModuleGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.UnloadModuleResponse} returns this
 */
proto.api_container_api.UnloadModuleResponse.prototype.setModuleGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.ExecuteModuleArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.ExecuteModuleArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.ExecuteModuleArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.ExecuteModuleArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    serializedParams: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.ExecuteModuleArgs}
 */
proto.api_container_api.ExecuteModuleArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.ExecuteModuleArgs;
  return proto.api_container_api.ExecuteModuleArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.ExecuteModuleArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.ExecuteModuleArgs}
 */
proto.api_container_api.ExecuteModuleArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModuleId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSerializedParams(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.ExecuteModuleArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.ExecuteModuleArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.ExecuteModuleArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.ExecuteModuleArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSerializedParams();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string module_id = 1;
 * @return {string}
 */
proto.api_container_api.ExecuteModuleArgs.prototype.getModuleId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.ExecuteModuleArgs} returns this
 */
proto.api_container_api.ExecuteModuleArgs.prototype.setModuleId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string serialized_params = 2;
 * @return {string}
 */
proto.api_container_api.ExecuteModuleArgs.prototype.getSerializedParams = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.ExecuteModuleArgs} returns this
 */
proto.api_container_api.ExecuteModuleArgs.prototype.setSerializedParams = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.ExecuteModuleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.ExecuteModuleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.ExecuteModuleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.ExecuteModuleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    serializedResult: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.ExecuteModuleResponse}
 */
proto.api_container_api.ExecuteModuleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.ExecuteModuleResponse;
  return proto.api_container_api.ExecuteModuleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.ExecuteModuleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.ExecuteModuleResponse}
 */
proto.api_container_api.ExecuteModuleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSerializedResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.ExecuteModuleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.ExecuteModuleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.ExecuteModuleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.ExecuteModuleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSerializedResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string serialized_result = 1;
 * @return {string}
 */
proto.api_container_api.ExecuteModuleResponse.prototype.getSerializedResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.ExecuteModuleResponse} returns this
 */
proto.api_container_api.ExecuteModuleResponse.prototype.setSerializedResult = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.ExecuteStartosisScriptArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.ExecuteStartosisScriptArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.ExecuteStartosisScriptArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.ExecuteStartosisScriptArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    serializedScript: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dryRun: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.ExecuteStartosisScriptArgs}
 */
proto.api_container_api.ExecuteStartosisScriptArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.ExecuteStartosisScriptArgs;
  return proto.api_container_api.ExecuteStartosisScriptArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.ExecuteStartosisScriptArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.ExecuteStartosisScriptArgs}
 */
proto.api_container_api.ExecuteStartosisScriptArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSerializedScript(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDryRun(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.ExecuteStartosisScriptArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.ExecuteStartosisScriptArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.ExecuteStartosisScriptArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.ExecuteStartosisScriptArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSerializedScript();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string serialized_script = 1;
 * @return {string}
 */
proto.api_container_api.ExecuteStartosisScriptArgs.prototype.getSerializedScript = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.ExecuteStartosisScriptArgs} returns this
 */
proto.api_container_api.ExecuteStartosisScriptArgs.prototype.setSerializedScript = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool dry_run = 2;
 * @return {boolean}
 */
proto.api_container_api.ExecuteStartosisScriptArgs.prototype.getDryRun = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api_container_api.ExecuteStartosisScriptArgs} returns this
 */
proto.api_container_api.ExecuteStartosisScriptArgs.prototype.setDryRun = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api_container_api.ExecuteStartosisScriptArgs} returns this
 */
proto.api_container_api.ExecuteStartosisScriptArgs.prototype.clearDryRun = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_container_api.ExecuteStartosisScriptArgs.prototype.hasDryRun = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.ExecuteStartosisRemoteModuleArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.ExecuteStartosisRemoteModuleArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.ExecuteStartosisRemoteModuleArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.ExecuteStartosisRemoteModuleArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    serializedParams: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dryRun: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.ExecuteStartosisRemoteModuleArgs}
 */
proto.api_container_api.ExecuteStartosisRemoteModuleArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.ExecuteStartosisRemoteModuleArgs;
  return proto.api_container_api.ExecuteStartosisRemoteModuleArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.ExecuteStartosisRemoteModuleArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.ExecuteStartosisRemoteModuleArgs}
 */
proto.api_container_api.ExecuteStartosisRemoteModuleArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModuleId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSerializedParams(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDryRun(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.ExecuteStartosisRemoteModuleArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.ExecuteStartosisRemoteModuleArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.ExecuteStartosisRemoteModuleArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.ExecuteStartosisRemoteModuleArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSerializedParams();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string module_id = 1;
 * @return {string}
 */
proto.api_container_api.ExecuteStartosisRemoteModuleArgs.prototype.getModuleId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.ExecuteStartosisRemoteModuleArgs} returns this
 */
proto.api_container_api.ExecuteStartosisRemoteModuleArgs.prototype.setModuleId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string serialized_params = 2;
 * @return {string}
 */
proto.api_container_api.ExecuteStartosisRemoteModuleArgs.prototype.getSerializedParams = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.ExecuteStartosisRemoteModuleArgs} returns this
 */
proto.api_container_api.ExecuteStartosisRemoteModuleArgs.prototype.setSerializedParams = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool dry_run = 3;
 * @return {boolean}
 */
proto.api_container_api.ExecuteStartosisRemoteModuleArgs.prototype.getDryRun = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api_container_api.ExecuteStartosisRemoteModuleArgs} returns this
 */
proto.api_container_api.ExecuteStartosisRemoteModuleArgs.prototype.setDryRun = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api_container_api.ExecuteStartosisRemoteModuleArgs} returns this
 */
proto.api_container_api.ExecuteStartosisRemoteModuleArgs.prototype.clearDryRun = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_container_api.ExecuteStartosisRemoteModuleArgs.prototype.hasDryRun = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.ExecuteStartosisModuleArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.ExecuteStartosisModuleArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.ExecuteStartosisModuleArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.ExecuteStartosisModuleArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    data: msg.getData_asB64(),
    serializedParams: jspb.Message.getFieldWithDefault(msg, 3, ""),
    dryRun: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.ExecuteStartosisModuleArgs}
 */
proto.api_container_api.ExecuteStartosisModuleArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.ExecuteStartosisModuleArgs;
  return proto.api_container_api.ExecuteStartosisModuleArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.ExecuteStartosisModuleArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.ExecuteStartosisModuleArgs}
 */
proto.api_container_api.ExecuteStartosisModuleArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModuleId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSerializedParams(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDryRun(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.ExecuteStartosisModuleArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.ExecuteStartosisModuleArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.ExecuteStartosisModuleArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.ExecuteStartosisModuleArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getSerializedParams();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string module_id = 1;
 * @return {string}
 */
proto.api_container_api.ExecuteStartosisModuleArgs.prototype.getModuleId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.ExecuteStartosisModuleArgs} returns this
 */
proto.api_container_api.ExecuteStartosisModuleArgs.prototype.setModuleId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes data = 2;
 * @return {string}
 */
proto.api_container_api.ExecuteStartosisModuleArgs.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.api_container_api.ExecuteStartosisModuleArgs.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.api_container_api.ExecuteStartosisModuleArgs.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.api_container_api.ExecuteStartosisModuleArgs} returns this
 */
proto.api_container_api.ExecuteStartosisModuleArgs.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string serialized_params = 3;
 * @return {string}
 */
proto.api_container_api.ExecuteStartosisModuleArgs.prototype.getSerializedParams = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.ExecuteStartosisModuleArgs} returns this
 */
proto.api_container_api.ExecuteStartosisModuleArgs.prototype.setSerializedParams = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool dry_run = 4;
 * @return {boolean}
 */
proto.api_container_api.ExecuteStartosisModuleArgs.prototype.getDryRun = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api_container_api.ExecuteStartosisModuleArgs} returns this
 */
proto.api_container_api.ExecuteStartosisModuleArgs.prototype.setDryRun = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api_container_api.ExecuteStartosisModuleArgs} returns this
 */
proto.api_container_api.ExecuteStartosisModuleArgs.prototype.clearDryRun = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_container_api.ExecuteStartosisModuleArgs.prototype.hasDryRun = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api_container_api.ExecuteStartosisResponse.repeatedFields_ = [5];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api_container_api.ExecuteStartosisResponse.oneofGroups_ = [[2,3,4]];

/**
 * @enum {number}
 */
proto.api_container_api.ExecuteStartosisResponse.KurtosisErrorCase = {
  KURTOSIS_ERROR_NOT_SET: 0,
  INTERPRETATION_ERROR: 2,
  VALIDATION_ERRORS: 3,
  EXECUTION_ERROR: 4
};

/**
 * @return {proto.api_container_api.ExecuteStartosisResponse.KurtosisErrorCase}
 */
proto.api_container_api.ExecuteStartosisResponse.prototype.getKurtosisErrorCase = function() {
  return /** @type {proto.api_container_api.ExecuteStartosisResponse.KurtosisErrorCase} */(jspb.Message.computeOneofCase(this, proto.api_container_api.ExecuteStartosisResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.ExecuteStartosisResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.ExecuteStartosisResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.ExecuteStartosisResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.ExecuteStartosisResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    serializedScriptOutput: jspb.Message.getFieldWithDefault(msg, 1, ""),
    interpretationError: (f = msg.getInterpretationError()) && proto.api_container_api.KurtosisInterpretationError.toObject(includeInstance, f),
    validationErrors: (f = msg.getValidationErrors()) && proto.api_container_api.KurtosisValidationErrors.toObject(includeInstance, f),
    executionError: (f = msg.getExecutionError()) && proto.api_container_api.KurtosisExecutionError.toObject(includeInstance, f),
    serializedInstructionsList: jspb.Message.toObjectList(msg.getSerializedInstructionsList(),
    proto.api_container_api.SerializedKurtosisInstruction.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.ExecuteStartosisResponse}
 */
proto.api_container_api.ExecuteStartosisResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.ExecuteStartosisResponse;
  return proto.api_container_api.ExecuteStartosisResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.ExecuteStartosisResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.ExecuteStartosisResponse}
 */
proto.api_container_api.ExecuteStartosisResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSerializedScriptOutput(value);
      break;
    case 2:
      var value = new proto.api_container_api.KurtosisInterpretationError;
      reader.readMessage(value,proto.api_container_api.KurtosisInterpretationError.deserializeBinaryFromReader);
      msg.setInterpretationError(value);
      break;
    case 3:
      var value = new proto.api_container_api.KurtosisValidationErrors;
      reader.readMessage(value,proto.api_container_api.KurtosisValidationErrors.deserializeBinaryFromReader);
      msg.setValidationErrors(value);
      break;
    case 4:
      var value = new proto.api_container_api.KurtosisExecutionError;
      reader.readMessage(value,proto.api_container_api.KurtosisExecutionError.deserializeBinaryFromReader);
      msg.setExecutionError(value);
      break;
    case 5:
      var value = new proto.api_container_api.SerializedKurtosisInstruction;
      reader.readMessage(value,proto.api_container_api.SerializedKurtosisInstruction.deserializeBinaryFromReader);
      msg.addSerializedInstructions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.ExecuteStartosisResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.ExecuteStartosisResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.ExecuteStartosisResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.ExecuteStartosisResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSerializedScriptOutput();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInterpretationError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api_container_api.KurtosisInterpretationError.serializeBinaryToWriter
    );
  }
  f = message.getValidationErrors();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api_container_api.KurtosisValidationErrors.serializeBinaryToWriter
    );
  }
  f = message.getExecutionError();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api_container_api.KurtosisExecutionError.serializeBinaryToWriter
    );
  }
  f = message.getSerializedInstructionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.api_container_api.SerializedKurtosisInstruction.serializeBinaryToWriter
    );
  }
};


/**
 * optional string serialized_script_output = 1;
 * @return {string}
 */
proto.api_container_api.ExecuteStartosisResponse.prototype.getSerializedScriptOutput = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.ExecuteStartosisResponse} returns this
 */
proto.api_container_api.ExecuteStartosisResponse.prototype.setSerializedScriptOutput = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional KurtosisInterpretationError interpretation_error = 2;
 * @return {?proto.api_container_api.KurtosisInterpretationError}
 */
proto.api_container_api.ExecuteStartosisResponse.prototype.getInterpretationError = function() {
  return /** @type{?proto.api_container_api.KurtosisInterpretationError} */ (
    jspb.Message.getWrapperField(this, proto.api_container_api.KurtosisInterpretationError, 2));
};


/**
 * @param {?proto.api_container_api.KurtosisInterpretationError|undefined} value
 * @return {!proto.api_container_api.ExecuteStartosisResponse} returns this
*/
proto.api_container_api.ExecuteStartosisResponse.prototype.setInterpretationError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.api_container_api.ExecuteStartosisResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_container_api.ExecuteStartosisResponse} returns this
 */
proto.api_container_api.ExecuteStartosisResponse.prototype.clearInterpretationError = function() {
  return this.setInterpretationError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_container_api.ExecuteStartosisResponse.prototype.hasInterpretationError = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional KurtosisValidationErrors validation_errors = 3;
 * @return {?proto.api_container_api.KurtosisValidationErrors}
 */
proto.api_container_api.ExecuteStartosisResponse.prototype.getValidationErrors = function() {
  return /** @type{?proto.api_container_api.KurtosisValidationErrors} */ (
    jspb.Message.getWrapperField(this, proto.api_container_api.KurtosisValidationErrors, 3));
};


/**
 * @param {?proto.api_container_api.KurtosisValidationErrors|undefined} value
 * @return {!proto.api_container_api.ExecuteStartosisResponse} returns this
*/
proto.api_container_api.ExecuteStartosisResponse.prototype.setValidationErrors = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.api_container_api.ExecuteStartosisResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_container_api.ExecuteStartosisResponse} returns this
 */
proto.api_container_api.ExecuteStartosisResponse.prototype.clearValidationErrors = function() {
  return this.setValidationErrors(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_container_api.ExecuteStartosisResponse.prototype.hasValidationErrors = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional KurtosisExecutionError execution_error = 4;
 * @return {?proto.api_container_api.KurtosisExecutionError}
 */
proto.api_container_api.ExecuteStartosisResponse.prototype.getExecutionError = function() {
  return /** @type{?proto.api_container_api.KurtosisExecutionError} */ (
    jspb.Message.getWrapperField(this, proto.api_container_api.KurtosisExecutionError, 4));
};


/**
 * @param {?proto.api_container_api.KurtosisExecutionError|undefined} value
 * @return {!proto.api_container_api.ExecuteStartosisResponse} returns this
*/
proto.api_container_api.ExecuteStartosisResponse.prototype.setExecutionError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.api_container_api.ExecuteStartosisResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_container_api.ExecuteStartosisResponse} returns this
 */
proto.api_container_api.ExecuteStartosisResponse.prototype.clearExecutionError = function() {
  return this.setExecutionError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_container_api.ExecuteStartosisResponse.prototype.hasExecutionError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated SerializedKurtosisInstruction serialized_instructions = 5;
 * @return {!Array<!proto.api_container_api.SerializedKurtosisInstruction>}
 */
proto.api_container_api.ExecuteStartosisResponse.prototype.getSerializedInstructionsList = function() {
  return /** @type{!Array<!proto.api_container_api.SerializedKurtosisInstruction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api_container_api.SerializedKurtosisInstruction, 5));
};


/**
 * @param {!Array<!proto.api_container_api.SerializedKurtosisInstruction>} value
 * @return {!proto.api_container_api.ExecuteStartosisResponse} returns this
*/
proto.api_container_api.ExecuteStartosisResponse.prototype.setSerializedInstructionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.api_container_api.SerializedKurtosisInstruction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api_container_api.SerializedKurtosisInstruction}
 */
proto.api_container_api.ExecuteStartosisResponse.prototype.addSerializedInstructions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.api_container_api.SerializedKurtosisInstruction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api_container_api.ExecuteStartosisResponse} returns this
 */
proto.api_container_api.ExecuteStartosisResponse.prototype.clearSerializedInstructionsList = function() {
  return this.setSerializedInstructionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.KurtosisInterpretationError.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.KurtosisInterpretationError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.KurtosisInterpretationError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.KurtosisInterpretationError.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorMessage: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.KurtosisInterpretationError}
 */
proto.api_container_api.KurtosisInterpretationError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.KurtosisInterpretationError;
  return proto.api_container_api.KurtosisInterpretationError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.KurtosisInterpretationError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.KurtosisInterpretationError}
 */
proto.api_container_api.KurtosisInterpretationError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.KurtosisInterpretationError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.KurtosisInterpretationError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.KurtosisInterpretationError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.KurtosisInterpretationError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrorMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string error_message = 1;
 * @return {string}
 */
proto.api_container_api.KurtosisInterpretationError.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.KurtosisInterpretationError} returns this
 */
proto.api_container_api.KurtosisInterpretationError.prototype.setErrorMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api_container_api.KurtosisValidationErrors.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.KurtosisValidationErrors.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.KurtosisValidationErrors.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.KurtosisValidationErrors} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.KurtosisValidationErrors.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorsList: jspb.Message.toObjectList(msg.getErrorsList(),
    proto.api_container_api.KurtosisValidationError.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.KurtosisValidationErrors}
 */
proto.api_container_api.KurtosisValidationErrors.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.KurtosisValidationErrors;
  return proto.api_container_api.KurtosisValidationErrors.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.KurtosisValidationErrors} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.KurtosisValidationErrors}
 */
proto.api_container_api.KurtosisValidationErrors.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api_container_api.KurtosisValidationError;
      reader.readMessage(value,proto.api_container_api.KurtosisValidationError.deserializeBinaryFromReader);
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.KurtosisValidationErrors.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.KurtosisValidationErrors.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.KurtosisValidationErrors} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.KurtosisValidationErrors.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api_container_api.KurtosisValidationError.serializeBinaryToWriter
    );
  }
};


/**
 * repeated KurtosisValidationError errors = 1;
 * @return {!Array<!proto.api_container_api.KurtosisValidationError>}
 */
proto.api_container_api.KurtosisValidationErrors.prototype.getErrorsList = function() {
  return /** @type{!Array<!proto.api_container_api.KurtosisValidationError>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api_container_api.KurtosisValidationError, 1));
};


/**
 * @param {!Array<!proto.api_container_api.KurtosisValidationError>} value
 * @return {!proto.api_container_api.KurtosisValidationErrors} returns this
*/
proto.api_container_api.KurtosisValidationErrors.prototype.setErrorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api_container_api.KurtosisValidationError=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api_container_api.KurtosisValidationError}
 */
proto.api_container_api.KurtosisValidationErrors.prototype.addErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api_container_api.KurtosisValidationError, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api_container_api.KurtosisValidationErrors} returns this
 */
proto.api_container_api.KurtosisValidationErrors.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.KurtosisValidationError.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.KurtosisValidationError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.KurtosisValidationError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.KurtosisValidationError.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorMessage: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.KurtosisValidationError}
 */
proto.api_container_api.KurtosisValidationError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.KurtosisValidationError;
  return proto.api_container_api.KurtosisValidationError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.KurtosisValidationError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.KurtosisValidationError}
 */
proto.api_container_api.KurtosisValidationError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.KurtosisValidationError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.KurtosisValidationError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.KurtosisValidationError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.KurtosisValidationError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrorMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string error_message = 1;
 * @return {string}
 */
proto.api_container_api.KurtosisValidationError.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.KurtosisValidationError} returns this
 */
proto.api_container_api.KurtosisValidationError.prototype.setErrorMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.KurtosisExecutionError.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.KurtosisExecutionError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.KurtosisExecutionError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.KurtosisExecutionError.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorMessage: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.KurtosisExecutionError}
 */
proto.api_container_api.KurtosisExecutionError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.KurtosisExecutionError;
  return proto.api_container_api.KurtosisExecutionError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.KurtosisExecutionError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.KurtosisExecutionError}
 */
proto.api_container_api.KurtosisExecutionError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.KurtosisExecutionError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.KurtosisExecutionError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.KurtosisExecutionError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.KurtosisExecutionError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrorMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string error_message = 1;
 * @return {string}
 */
proto.api_container_api.KurtosisExecutionError.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.KurtosisExecutionError} returns this
 */
proto.api_container_api.KurtosisExecutionError.prototype.setErrorMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.SerializedKurtosisInstruction.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.SerializedKurtosisInstruction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.SerializedKurtosisInstruction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.SerializedKurtosisInstruction.toObject = function(includeInstance, msg) {
  var f, obj = {
    serializedInstruction: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.SerializedKurtosisInstruction}
 */
proto.api_container_api.SerializedKurtosisInstruction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.SerializedKurtosisInstruction;
  return proto.api_container_api.SerializedKurtosisInstruction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.SerializedKurtosisInstruction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.SerializedKurtosisInstruction}
 */
proto.api_container_api.SerializedKurtosisInstruction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSerializedInstruction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.SerializedKurtosisInstruction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.SerializedKurtosisInstruction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.SerializedKurtosisInstruction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.SerializedKurtosisInstruction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSerializedInstruction();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string serialized_instruction = 1;
 * @return {string}
 */
proto.api_container_api.SerializedKurtosisInstruction.prototype.getSerializedInstruction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.SerializedKurtosisInstruction} returns this
 */
proto.api_container_api.SerializedKurtosisInstruction.prototype.setSerializedInstruction = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.StartServicesArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.StartServicesArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.StartServicesArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.StartServicesArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceIdsToConfigsMap: (f = msg.getServiceIdsToConfigsMap()) ? f.toObject(includeInstance, proto.api_container_api.ServiceConfig.toObject) : [],
    partitionId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.StartServicesArgs}
 */
proto.api_container_api.StartServicesArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.StartServicesArgs;
  return proto.api_container_api.StartServicesArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.StartServicesArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.StartServicesArgs}
 */
proto.api_container_api.StartServicesArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getServiceIdsToConfigsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api_container_api.ServiceConfig.deserializeBinaryFromReader, "", new proto.api_container_api.ServiceConfig());
         });
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartitionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.StartServicesArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.StartServicesArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.StartServicesArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.StartServicesArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceIdsToConfigsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api_container_api.ServiceConfig.serializeBinaryToWriter);
  }
  f = message.getPartitionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * map<string, ServiceConfig> service_ids_to_configs = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api_container_api.ServiceConfig>}
 */
proto.api_container_api.StartServicesArgs.prototype.getServiceIdsToConfigsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api_container_api.ServiceConfig>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.api_container_api.ServiceConfig));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api_container_api.StartServicesArgs} returns this
 */
proto.api_container_api.StartServicesArgs.prototype.clearServiceIdsToConfigsMap = function() {
  this.getServiceIdsToConfigsMap().clear();
  return this;};


/**
 * optional string partition_id = 2;
 * @return {string}
 */
proto.api_container_api.StartServicesArgs.prototype.getPartitionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.StartServicesArgs} returns this
 */
proto.api_container_api.StartServicesArgs.prototype.setPartitionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.StartServicesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.StartServicesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.StartServicesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.StartServicesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    successfulServiceIdsToServiceInfoMap: (f = msg.getSuccessfulServiceIdsToServiceInfoMap()) ? f.toObject(includeInstance, proto.api_container_api.ServiceInfo.toObject) : [],
    failedServiceIdsToErrorMap: (f = msg.getFailedServiceIdsToErrorMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.StartServicesResponse}
 */
proto.api_container_api.StartServicesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.StartServicesResponse;
  return proto.api_container_api.StartServicesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.StartServicesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.StartServicesResponse}
 */
proto.api_container_api.StartServicesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getSuccessfulServiceIdsToServiceInfoMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api_container_api.ServiceInfo.deserializeBinaryFromReader, "", new proto.api_container_api.ServiceInfo());
         });
      break;
    case 2:
      var value = msg.getFailedServiceIdsToErrorMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.StartServicesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.StartServicesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.StartServicesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.StartServicesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccessfulServiceIdsToServiceInfoMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api_container_api.ServiceInfo.serializeBinaryToWriter);
  }
  f = message.getFailedServiceIdsToErrorMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * map<string, ServiceInfo> successful_service_ids_to_service_info = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api_container_api.ServiceInfo>}
 */
proto.api_container_api.StartServicesResponse.prototype.getSuccessfulServiceIdsToServiceInfoMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api_container_api.ServiceInfo>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.api_container_api.ServiceInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api_container_api.StartServicesResponse} returns this
 */
proto.api_container_api.StartServicesResponse.prototype.clearSuccessfulServiceIdsToServiceInfoMap = function() {
  this.getSuccessfulServiceIdsToServiceInfoMap().clear();
  return this;};


/**
 * map<string, string> failed_service_ids_to_error = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.api_container_api.StartServicesResponse.prototype.getFailedServiceIdsToErrorMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api_container_api.StartServicesResponse} returns this
 */
proto.api_container_api.StartServicesResponse.prototype.clearFailedServiceIdsToErrorMap = function() {
  this.getFailedServiceIdsToErrorMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.GetServicesArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.GetServicesArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.GetServicesArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.GetServicesArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceIdsMap: (f = msg.getServiceIdsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.GetServicesArgs}
 */
proto.api_container_api.GetServicesArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.GetServicesArgs;
  return proto.api_container_api.GetServicesArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.GetServicesArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.GetServicesArgs}
 */
proto.api_container_api.GetServicesArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getServiceIdsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBool, null, "", false);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.GetServicesArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.GetServicesArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.GetServicesArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.GetServicesArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceIdsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBool);
  }
};


/**
 * map<string, bool> service_ids = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,boolean>}
 */
proto.api_container_api.GetServicesArgs.prototype.getServiceIdsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,boolean>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api_container_api.GetServicesArgs} returns this
 */
proto.api_container_api.GetServicesArgs.prototype.clearServiceIdsMap = function() {
  this.getServiceIdsMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.GetServicesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.GetServicesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.GetServicesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.GetServicesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceInfoMap: (f = msg.getServiceInfoMap()) ? f.toObject(includeInstance, proto.api_container_api.ServiceInfo.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.GetServicesResponse}
 */
proto.api_container_api.GetServicesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.GetServicesResponse;
  return proto.api_container_api.GetServicesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.GetServicesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.GetServicesResponse}
 */
proto.api_container_api.GetServicesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getServiceInfoMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api_container_api.ServiceInfo.deserializeBinaryFromReader, "", new proto.api_container_api.ServiceInfo());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.GetServicesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.GetServicesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.GetServicesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.GetServicesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceInfoMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api_container_api.ServiceInfo.serializeBinaryToWriter);
  }
};


/**
 * map<string, ServiceInfo> service_info = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api_container_api.ServiceInfo>}
 */
proto.api_container_api.GetServicesResponse.prototype.getServiceInfoMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api_container_api.ServiceInfo>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.api_container_api.ServiceInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api_container_api.GetServicesResponse} returns this
 */
proto.api_container_api.GetServicesResponse.prototype.clearServiceInfoMap = function() {
  this.getServiceInfoMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.RemoveServiceArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.RemoveServiceArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.RemoveServiceArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.RemoveServiceArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.RemoveServiceArgs}
 */
proto.api_container_api.RemoveServiceArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.RemoveServiceArgs;
  return proto.api_container_api.RemoveServiceArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.RemoveServiceArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.RemoveServiceArgs}
 */
proto.api_container_api.RemoveServiceArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.RemoveServiceArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.RemoveServiceArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.RemoveServiceArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.RemoveServiceArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string service_id = 1;
 * @return {string}
 */
proto.api_container_api.RemoveServiceArgs.prototype.getServiceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.RemoveServiceArgs} returns this
 */
proto.api_container_api.RemoveServiceArgs.prototype.setServiceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.RemoveServiceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.RemoveServiceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.RemoveServiceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.RemoveServiceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceGuid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.RemoveServiceResponse}
 */
proto.api_container_api.RemoveServiceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.RemoveServiceResponse;
  return proto.api_container_api.RemoveServiceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.RemoveServiceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.RemoveServiceResponse}
 */
proto.api_container_api.RemoveServiceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.RemoveServiceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.RemoveServiceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.RemoveServiceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.RemoveServiceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string service_guid = 1;
 * @return {string}
 */
proto.api_container_api.RemoveServiceResponse.prototype.getServiceGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.RemoveServiceResponse} returns this
 */
proto.api_container_api.RemoveServiceResponse.prototype.setServiceGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.RepartitionArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.RepartitionArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.RepartitionArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.RepartitionArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    partitionServicesMap: (f = msg.getPartitionServicesMap()) ? f.toObject(includeInstance, proto.api_container_api.PartitionServices.toObject) : [],
    partitionConnectionsMap: (f = msg.getPartitionConnectionsMap()) ? f.toObject(includeInstance, proto.api_container_api.PartitionConnections.toObject) : [],
    defaultConnection: (f = msg.getDefaultConnection()) && proto.api_container_api.PartitionConnectionInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.RepartitionArgs}
 */
proto.api_container_api.RepartitionArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.RepartitionArgs;
  return proto.api_container_api.RepartitionArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.RepartitionArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.RepartitionArgs}
 */
proto.api_container_api.RepartitionArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getPartitionServicesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api_container_api.PartitionServices.deserializeBinaryFromReader, "", new proto.api_container_api.PartitionServices());
         });
      break;
    case 2:
      var value = msg.getPartitionConnectionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api_container_api.PartitionConnections.deserializeBinaryFromReader, "", new proto.api_container_api.PartitionConnections());
         });
      break;
    case 3:
      var value = new proto.api_container_api.PartitionConnectionInfo;
      reader.readMessage(value,proto.api_container_api.PartitionConnectionInfo.deserializeBinaryFromReader);
      msg.setDefaultConnection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.RepartitionArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.RepartitionArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.RepartitionArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.RepartitionArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartitionServicesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api_container_api.PartitionServices.serializeBinaryToWriter);
  }
  f = message.getPartitionConnectionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api_container_api.PartitionConnections.serializeBinaryToWriter);
  }
  f = message.getDefaultConnection();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api_container_api.PartitionConnectionInfo.serializeBinaryToWriter
    );
  }
};


/**
 * map<string, PartitionServices> partition_services = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api_container_api.PartitionServices>}
 */
proto.api_container_api.RepartitionArgs.prototype.getPartitionServicesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api_container_api.PartitionServices>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.api_container_api.PartitionServices));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api_container_api.RepartitionArgs} returns this
 */
proto.api_container_api.RepartitionArgs.prototype.clearPartitionServicesMap = function() {
  this.getPartitionServicesMap().clear();
  return this;};


/**
 * map<string, PartitionConnections> partition_connections = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api_container_api.PartitionConnections>}
 */
proto.api_container_api.RepartitionArgs.prototype.getPartitionConnectionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api_container_api.PartitionConnections>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.api_container_api.PartitionConnections));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api_container_api.RepartitionArgs} returns this
 */
proto.api_container_api.RepartitionArgs.prototype.clearPartitionConnectionsMap = function() {
  this.getPartitionConnectionsMap().clear();
  return this;};


/**
 * optional PartitionConnectionInfo default_connection = 3;
 * @return {?proto.api_container_api.PartitionConnectionInfo}
 */
proto.api_container_api.RepartitionArgs.prototype.getDefaultConnection = function() {
  return /** @type{?proto.api_container_api.PartitionConnectionInfo} */ (
    jspb.Message.getWrapperField(this, proto.api_container_api.PartitionConnectionInfo, 3));
};


/**
 * @param {?proto.api_container_api.PartitionConnectionInfo|undefined} value
 * @return {!proto.api_container_api.RepartitionArgs} returns this
*/
proto.api_container_api.RepartitionArgs.prototype.setDefaultConnection = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_container_api.RepartitionArgs} returns this
 */
proto.api_container_api.RepartitionArgs.prototype.clearDefaultConnection = function() {
  return this.setDefaultConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_container_api.RepartitionArgs.prototype.hasDefaultConnection = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.PartitionServices.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.PartitionServices.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.PartitionServices} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.PartitionServices.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceIdSetMap: (f = msg.getServiceIdSetMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.PartitionServices}
 */
proto.api_container_api.PartitionServices.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.PartitionServices;
  return proto.api_container_api.PartitionServices.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.PartitionServices} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.PartitionServices}
 */
proto.api_container_api.PartitionServices.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getServiceIdSetMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBool, null, "", false);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.PartitionServices.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.PartitionServices.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.PartitionServices} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.PartitionServices.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceIdSetMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBool);
  }
};


/**
 * map<string, bool> service_id_set = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,boolean>}
 */
proto.api_container_api.PartitionServices.prototype.getServiceIdSetMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,boolean>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api_container_api.PartitionServices} returns this
 */
proto.api_container_api.PartitionServices.prototype.clearServiceIdSetMap = function() {
  this.getServiceIdSetMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.PartitionConnections.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.PartitionConnections.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.PartitionConnections} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.PartitionConnections.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectionInfoMap: (f = msg.getConnectionInfoMap()) ? f.toObject(includeInstance, proto.api_container_api.PartitionConnectionInfo.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.PartitionConnections}
 */
proto.api_container_api.PartitionConnections.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.PartitionConnections;
  return proto.api_container_api.PartitionConnections.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.PartitionConnections} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.PartitionConnections}
 */
proto.api_container_api.PartitionConnections.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getConnectionInfoMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api_container_api.PartitionConnectionInfo.deserializeBinaryFromReader, "", new proto.api_container_api.PartitionConnectionInfo());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.PartitionConnections.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.PartitionConnections.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.PartitionConnections} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.PartitionConnections.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectionInfoMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api_container_api.PartitionConnectionInfo.serializeBinaryToWriter);
  }
};


/**
 * map<string, PartitionConnectionInfo> connection_info = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api_container_api.PartitionConnectionInfo>}
 */
proto.api_container_api.PartitionConnections.prototype.getConnectionInfoMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api_container_api.PartitionConnectionInfo>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.api_container_api.PartitionConnectionInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api_container_api.PartitionConnections} returns this
 */
proto.api_container_api.PartitionConnections.prototype.clearConnectionInfoMap = function() {
  this.getConnectionInfoMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.PartitionConnectionInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.PartitionConnectionInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.PartitionConnectionInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.PartitionConnectionInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    packetLossPercentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.PartitionConnectionInfo}
 */
proto.api_container_api.PartitionConnectionInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.PartitionConnectionInfo;
  return proto.api_container_api.PartitionConnectionInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.PartitionConnectionInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.PartitionConnectionInfo}
 */
proto.api_container_api.PartitionConnectionInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPacketLossPercentage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.PartitionConnectionInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.PartitionConnectionInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.PartitionConnectionInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.PartitionConnectionInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPacketLossPercentage();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
};


/**
 * optional float packet_loss_percentage = 1;
 * @return {number}
 */
proto.api_container_api.PartitionConnectionInfo.prototype.getPacketLossPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api_container_api.PartitionConnectionInfo} returns this
 */
proto.api_container_api.PartitionConnectionInfo.prototype.setPacketLossPercentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api_container_api.ExecCommandArgs.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.ExecCommandArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.ExecCommandArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.ExecCommandArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.ExecCommandArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    commandArgsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.ExecCommandArgs}
 */
proto.api_container_api.ExecCommandArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.ExecCommandArgs;
  return proto.api_container_api.ExecCommandArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.ExecCommandArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.ExecCommandArgs}
 */
proto.api_container_api.ExecCommandArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addCommandArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.ExecCommandArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.ExecCommandArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.ExecCommandArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.ExecCommandArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCommandArgsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string service_id = 1;
 * @return {string}
 */
proto.api_container_api.ExecCommandArgs.prototype.getServiceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.ExecCommandArgs} returns this
 */
proto.api_container_api.ExecCommandArgs.prototype.setServiceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string command_args = 2;
 * @return {!Array<string>}
 */
proto.api_container_api.ExecCommandArgs.prototype.getCommandArgsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api_container_api.ExecCommandArgs} returns this
 */
proto.api_container_api.ExecCommandArgs.prototype.setCommandArgsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api_container_api.ExecCommandArgs} returns this
 */
proto.api_container_api.ExecCommandArgs.prototype.addCommandArgs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api_container_api.ExecCommandArgs} returns this
 */
proto.api_container_api.ExecCommandArgs.prototype.clearCommandArgsList = function() {
  return this.setCommandArgsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.PauseServiceArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.PauseServiceArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.PauseServiceArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.PauseServiceArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.PauseServiceArgs}
 */
proto.api_container_api.PauseServiceArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.PauseServiceArgs;
  return proto.api_container_api.PauseServiceArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.PauseServiceArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.PauseServiceArgs}
 */
proto.api_container_api.PauseServiceArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.PauseServiceArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.PauseServiceArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.PauseServiceArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.PauseServiceArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string service_id = 1;
 * @return {string}
 */
proto.api_container_api.PauseServiceArgs.prototype.getServiceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.PauseServiceArgs} returns this
 */
proto.api_container_api.PauseServiceArgs.prototype.setServiceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.UnpauseServiceArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.UnpauseServiceArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.UnpauseServiceArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.UnpauseServiceArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.UnpauseServiceArgs}
 */
proto.api_container_api.UnpauseServiceArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.UnpauseServiceArgs;
  return proto.api_container_api.UnpauseServiceArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.UnpauseServiceArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.UnpauseServiceArgs}
 */
proto.api_container_api.UnpauseServiceArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.UnpauseServiceArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.UnpauseServiceArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.UnpauseServiceArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.UnpauseServiceArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string service_id = 1;
 * @return {string}
 */
proto.api_container_api.UnpauseServiceArgs.prototype.getServiceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.UnpauseServiceArgs} returns this
 */
proto.api_container_api.UnpauseServiceArgs.prototype.setServiceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.ExecCommandResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.ExecCommandResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.ExecCommandResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.ExecCommandResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    exitCode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    logOutput: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.ExecCommandResponse}
 */
proto.api_container_api.ExecCommandResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.ExecCommandResponse;
  return proto.api_container_api.ExecCommandResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.ExecCommandResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.ExecCommandResponse}
 */
proto.api_container_api.ExecCommandResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExitCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogOutput(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.ExecCommandResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.ExecCommandResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.ExecCommandResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.ExecCommandResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExitCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getLogOutput();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 exit_code = 1;
 * @return {number}
 */
proto.api_container_api.ExecCommandResponse.prototype.getExitCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api_container_api.ExecCommandResponse} returns this
 */
proto.api_container_api.ExecCommandResponse.prototype.setExitCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string log_output = 2;
 * @return {string}
 */
proto.api_container_api.ExecCommandResponse.prototype.getLogOutput = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.ExecCommandResponse} returns this
 */
proto.api_container_api.ExecCommandResponse.prototype.setLogOutput = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0),
    path: jspb.Message.getFieldWithDefault(msg, 3, ""),
    initialDelayMilliseconds: jspb.Message.getFieldWithDefault(msg, 4, 0),
    retries: jspb.Message.getFieldWithDefault(msg, 5, 0),
    retriesDelayMilliseconds: jspb.Message.getFieldWithDefault(msg, 6, 0),
    bodyText: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs}
 */
proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs;
  return proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs}
 */
proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setInitialDelayMilliseconds(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRetries(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRetriesDelayMilliseconds(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBodyText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInitialDelayMilliseconds();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getRetries();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getRetriesDelayMilliseconds();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getBodyText();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string service_id = 1;
 * @return {string}
 */
proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs.prototype.getServiceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs} returns this
 */
proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs.prototype.setServiceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 port = 2;
 * @return {number}
 */
proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs} returns this
 */
proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string path = 3;
 * @return {string}
 */
proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs} returns this
 */
proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 initial_delay_milliseconds = 4;
 * @return {number}
 */
proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs.prototype.getInitialDelayMilliseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs} returns this
 */
proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs.prototype.setInitialDelayMilliseconds = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 retries = 5;
 * @return {number}
 */
proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs.prototype.getRetries = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs} returns this
 */
proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs.prototype.setRetries = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 retries_delay_milliseconds = 6;
 * @return {number}
 */
proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs.prototype.getRetriesDelayMilliseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs} returns this
 */
proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs.prototype.setRetriesDelayMilliseconds = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string body_text = 7;
 * @return {string}
 */
proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs.prototype.getBodyText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs} returns this
 */
proto.api_container_api.WaitForHttpGetEndpointAvailabilityArgs.prototype.setBodyText = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0),
    path: jspb.Message.getFieldWithDefault(msg, 3, ""),
    requestBody: jspb.Message.getFieldWithDefault(msg, 4, ""),
    initialDelayMilliseconds: jspb.Message.getFieldWithDefault(msg, 5, 0),
    retries: jspb.Message.getFieldWithDefault(msg, 6, 0),
    retriesDelayMilliseconds: jspb.Message.getFieldWithDefault(msg, 7, 0),
    bodyText: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs}
 */
proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs;
  return proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs}
 */
proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestBody(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setInitialDelayMilliseconds(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRetries(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRetriesDelayMilliseconds(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setBodyText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRequestBody();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getInitialDelayMilliseconds();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getRetries();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getRetriesDelayMilliseconds();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getBodyText();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string service_id = 1;
 * @return {string}
 */
proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs.prototype.getServiceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs} returns this
 */
proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs.prototype.setServiceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 port = 2;
 * @return {number}
 */
proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs} returns this
 */
proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string path = 3;
 * @return {string}
 */
proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs} returns this
 */
proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string request_body = 4;
 * @return {string}
 */
proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs.prototype.getRequestBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs} returns this
 */
proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs.prototype.setRequestBody = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 initial_delay_milliseconds = 5;
 * @return {number}
 */
proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs.prototype.getInitialDelayMilliseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs} returns this
 */
proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs.prototype.setInitialDelayMilliseconds = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 retries = 6;
 * @return {number}
 */
proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs.prototype.getRetries = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs} returns this
 */
proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs.prototype.setRetries = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 retries_delay_milliseconds = 7;
 * @return {number}
 */
proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs.prototype.getRetriesDelayMilliseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs} returns this
 */
proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs.prototype.setRetriesDelayMilliseconds = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string body_text = 8;
 * @return {string}
 */
proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs.prototype.getBodyText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs} returns this
 */
proto.api_container_api.WaitForHttpPostEndpointAvailabilityArgs.prototype.setBodyText = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.UploadFilesArtifactArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.UploadFilesArtifactArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.UploadFilesArtifactArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.UploadFilesArtifactArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.UploadFilesArtifactArgs}
 */
proto.api_container_api.UploadFilesArtifactArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.UploadFilesArtifactArgs;
  return proto.api_container_api.UploadFilesArtifactArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.UploadFilesArtifactArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.UploadFilesArtifactArgs}
 */
proto.api_container_api.UploadFilesArtifactArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.UploadFilesArtifactArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.UploadFilesArtifactArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.UploadFilesArtifactArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.UploadFilesArtifactArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes data = 1;
 * @return {string}
 */
proto.api_container_api.UploadFilesArtifactArgs.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.api_container_api.UploadFilesArtifactArgs.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.api_container_api.UploadFilesArtifactArgs.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.api_container_api.UploadFilesArtifactArgs} returns this
 */
proto.api_container_api.UploadFilesArtifactArgs.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.UploadFilesArtifactResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.UploadFilesArtifactResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.UploadFilesArtifactResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.UploadFilesArtifactResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.UploadFilesArtifactResponse}
 */
proto.api_container_api.UploadFilesArtifactResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.UploadFilesArtifactResponse;
  return proto.api_container_api.UploadFilesArtifactResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.UploadFilesArtifactResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.UploadFilesArtifactResponse}
 */
proto.api_container_api.UploadFilesArtifactResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.UploadFilesArtifactResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.UploadFilesArtifactResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.UploadFilesArtifactResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.UploadFilesArtifactResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.api_container_api.UploadFilesArtifactResponse.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.UploadFilesArtifactResponse} returns this
 */
proto.api_container_api.UploadFilesArtifactResponse.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.DownloadFilesArtifactArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.DownloadFilesArtifactArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.DownloadFilesArtifactArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.DownloadFilesArtifactArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.DownloadFilesArtifactArgs}
 */
proto.api_container_api.DownloadFilesArtifactArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.DownloadFilesArtifactArgs;
  return proto.api_container_api.DownloadFilesArtifactArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.DownloadFilesArtifactArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.DownloadFilesArtifactArgs}
 */
proto.api_container_api.DownloadFilesArtifactArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.DownloadFilesArtifactArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.DownloadFilesArtifactArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.DownloadFilesArtifactArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.DownloadFilesArtifactArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.api_container_api.DownloadFilesArtifactArgs.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.DownloadFilesArtifactArgs} returns this
 */
proto.api_container_api.DownloadFilesArtifactArgs.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.DownloadFilesArtifactResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.DownloadFilesArtifactResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.DownloadFilesArtifactResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.DownloadFilesArtifactResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.DownloadFilesArtifactResponse}
 */
proto.api_container_api.DownloadFilesArtifactResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.DownloadFilesArtifactResponse;
  return proto.api_container_api.DownloadFilesArtifactResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.DownloadFilesArtifactResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.DownloadFilesArtifactResponse}
 */
proto.api_container_api.DownloadFilesArtifactResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.DownloadFilesArtifactResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.DownloadFilesArtifactResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.DownloadFilesArtifactResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.DownloadFilesArtifactResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes data = 1;
 * @return {string}
 */
proto.api_container_api.DownloadFilesArtifactResponse.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.api_container_api.DownloadFilesArtifactResponse.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.api_container_api.DownloadFilesArtifactResponse.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.api_container_api.DownloadFilesArtifactResponse} returns this
 */
proto.api_container_api.DownloadFilesArtifactResponse.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.StoreWebFilesArtifactArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.StoreWebFilesArtifactArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.StoreWebFilesArtifactArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.StoreWebFilesArtifactArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.StoreWebFilesArtifactArgs}
 */
proto.api_container_api.StoreWebFilesArtifactArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.StoreWebFilesArtifactArgs;
  return proto.api_container_api.StoreWebFilesArtifactArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.StoreWebFilesArtifactArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.StoreWebFilesArtifactArgs}
 */
proto.api_container_api.StoreWebFilesArtifactArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.StoreWebFilesArtifactArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.StoreWebFilesArtifactArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.StoreWebFilesArtifactArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.StoreWebFilesArtifactArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.api_container_api.StoreWebFilesArtifactArgs.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.StoreWebFilesArtifactArgs} returns this
 */
proto.api_container_api.StoreWebFilesArtifactArgs.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.StoreWebFilesArtifactResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.StoreWebFilesArtifactResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.StoreWebFilesArtifactResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.StoreWebFilesArtifactResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.StoreWebFilesArtifactResponse}
 */
proto.api_container_api.StoreWebFilesArtifactResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.StoreWebFilesArtifactResponse;
  return proto.api_container_api.StoreWebFilesArtifactResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.StoreWebFilesArtifactResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.StoreWebFilesArtifactResponse}
 */
proto.api_container_api.StoreWebFilesArtifactResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.StoreWebFilesArtifactResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.StoreWebFilesArtifactResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.StoreWebFilesArtifactResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.StoreWebFilesArtifactResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.api_container_api.StoreWebFilesArtifactResponse.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.StoreWebFilesArtifactResponse} returns this
 */
proto.api_container_api.StoreWebFilesArtifactResponse.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.StoreFilesArtifactFromServiceArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.StoreFilesArtifactFromServiceArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.StoreFilesArtifactFromServiceArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.StoreFilesArtifactFromServiceArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sourcePath: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.StoreFilesArtifactFromServiceArgs}
 */
proto.api_container_api.StoreFilesArtifactFromServiceArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.StoreFilesArtifactFromServiceArgs;
  return proto.api_container_api.StoreFilesArtifactFromServiceArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.StoreFilesArtifactFromServiceArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.StoreFilesArtifactFromServiceArgs}
 */
proto.api_container_api.StoreFilesArtifactFromServiceArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourcePath(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.StoreFilesArtifactFromServiceArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.StoreFilesArtifactFromServiceArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.StoreFilesArtifactFromServiceArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.StoreFilesArtifactFromServiceArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSourcePath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string service_id = 1;
 * @return {string}
 */
proto.api_container_api.StoreFilesArtifactFromServiceArgs.prototype.getServiceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.StoreFilesArtifactFromServiceArgs} returns this
 */
proto.api_container_api.StoreFilesArtifactFromServiceArgs.prototype.setServiceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string source_path = 2;
 * @return {string}
 */
proto.api_container_api.StoreFilesArtifactFromServiceArgs.prototype.getSourcePath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.StoreFilesArtifactFromServiceArgs} returns this
 */
proto.api_container_api.StoreFilesArtifactFromServiceArgs.prototype.setSourcePath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.StoreFilesArtifactFromServiceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.StoreFilesArtifactFromServiceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.StoreFilesArtifactFromServiceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.StoreFilesArtifactFromServiceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.StoreFilesArtifactFromServiceResponse}
 */
proto.api_container_api.StoreFilesArtifactFromServiceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.StoreFilesArtifactFromServiceResponse;
  return proto.api_container_api.StoreFilesArtifactFromServiceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.StoreFilesArtifactFromServiceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.StoreFilesArtifactFromServiceResponse}
 */
proto.api_container_api.StoreFilesArtifactFromServiceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.StoreFilesArtifactFromServiceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.StoreFilesArtifactFromServiceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.StoreFilesArtifactFromServiceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.StoreFilesArtifactFromServiceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.api_container_api.StoreFilesArtifactFromServiceResponse.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.StoreFilesArtifactFromServiceResponse} returns this
 */
proto.api_container_api.StoreFilesArtifactFromServiceResponse.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.RenderTemplatesToFilesArtifactArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.RenderTemplatesToFilesArtifactArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.RenderTemplatesToFilesArtifactArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.RenderTemplatesToFilesArtifactArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    templatesAndDataByDestinationRelFilepathMap: (f = msg.getTemplatesAndDataByDestinationRelFilepathMap()) ? f.toObject(includeInstance, proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.RenderTemplatesToFilesArtifactArgs}
 */
proto.api_container_api.RenderTemplatesToFilesArtifactArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.RenderTemplatesToFilesArtifactArgs;
  return proto.api_container_api.RenderTemplatesToFilesArtifactArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.RenderTemplatesToFilesArtifactArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.RenderTemplatesToFilesArtifactArgs}
 */
proto.api_container_api.RenderTemplatesToFilesArtifactArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getTemplatesAndDataByDestinationRelFilepathMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData.deserializeBinaryFromReader, "", new proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.RenderTemplatesToFilesArtifactArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.RenderTemplatesToFilesArtifactArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.RenderTemplatesToFilesArtifactArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.RenderTemplatesToFilesArtifactArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemplatesAndDataByDestinationRelFilepathMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData.serializeBinaryToWriter);
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData.toObject = function(includeInstance, msg) {
  var f, obj = {
    template: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dataAsJson: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData}
 */
proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData;
  return proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData}
 */
proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTemplate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataAsJson(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemplate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDataAsJson();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string template = 1;
 * @return {string}
 */
proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData.prototype.getTemplate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData} returns this
 */
proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData.prototype.setTemplate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string data_as_json = 2;
 * @return {string}
 */
proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData.prototype.getDataAsJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData} returns this
 */
proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData.prototype.setDataAsJson = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, TemplateAndData> templates_and_data_by_destination_rel_filepath = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData>}
 */
proto.api_container_api.RenderTemplatesToFilesArtifactArgs.prototype.getTemplatesAndDataByDestinationRelFilepathMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.api_container_api.RenderTemplatesToFilesArtifactArgs.TemplateAndData));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api_container_api.RenderTemplatesToFilesArtifactArgs} returns this
 */
proto.api_container_api.RenderTemplatesToFilesArtifactArgs.prototype.clearTemplatesAndDataByDestinationRelFilepathMap = function() {
  this.getTemplatesAndDataByDestinationRelFilepathMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.RenderTemplatesToFilesArtifactResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.RenderTemplatesToFilesArtifactResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.RenderTemplatesToFilesArtifactResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.RenderTemplatesToFilesArtifactResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.RenderTemplatesToFilesArtifactResponse}
 */
proto.api_container_api.RenderTemplatesToFilesArtifactResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.RenderTemplatesToFilesArtifactResponse;
  return proto.api_container_api.RenderTemplatesToFilesArtifactResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.RenderTemplatesToFilesArtifactResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.RenderTemplatesToFilesArtifactResponse}
 */
proto.api_container_api.RenderTemplatesToFilesArtifactResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.RenderTemplatesToFilesArtifactResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.RenderTemplatesToFilesArtifactResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.RenderTemplatesToFilesArtifactResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.RenderTemplatesToFilesArtifactResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.api_container_api.RenderTemplatesToFilesArtifactResponse.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.RenderTemplatesToFilesArtifactResponse} returns this
 */
proto.api_container_api.RenderTemplatesToFilesArtifactResponse.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.DefineFactArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.DefineFactArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.DefineFactArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.DefineFactArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    factRecipe: (f = msg.getFactRecipe()) && proto.api_container_api.FactRecipe.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.DefineFactArgs}
 */
proto.api_container_api.DefineFactArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.DefineFactArgs;
  return proto.api_container_api.DefineFactArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.DefineFactArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.DefineFactArgs}
 */
proto.api_container_api.DefineFactArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api_container_api.FactRecipe;
      reader.readMessage(value,proto.api_container_api.FactRecipe.deserializeBinaryFromReader);
      msg.setFactRecipe(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.DefineFactArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.DefineFactArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.DefineFactArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.DefineFactArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFactRecipe();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api_container_api.FactRecipe.serializeBinaryToWriter
    );
  }
};


/**
 * optional FactRecipe fact_recipe = 1;
 * @return {?proto.api_container_api.FactRecipe}
 */
proto.api_container_api.DefineFactArgs.prototype.getFactRecipe = function() {
  return /** @type{?proto.api_container_api.FactRecipe} */ (
    jspb.Message.getWrapperField(this, proto.api_container_api.FactRecipe, 1));
};


/**
 * @param {?proto.api_container_api.FactRecipe|undefined} value
 * @return {!proto.api_container_api.DefineFactArgs} returns this
*/
proto.api_container_api.DefineFactArgs.prototype.setFactRecipe = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_container_api.DefineFactArgs} returns this
 */
proto.api_container_api.DefineFactArgs.prototype.clearFactRecipe = function() {
  return this.setFactRecipe(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_container_api.DefineFactArgs.prototype.hasFactRecipe = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.DefineFactResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.DefineFactResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.DefineFactResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.DefineFactResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.DefineFactResponse}
 */
proto.api_container_api.DefineFactResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.DefineFactResponse;
  return proto.api_container_api.DefineFactResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.DefineFactResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.DefineFactResponse}
 */
proto.api_container_api.DefineFactResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.DefineFactResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.DefineFactResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.DefineFactResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.DefineFactResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.GetFactValuesArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.GetFactValuesArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.GetFactValuesArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.GetFactValuesArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    factName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    startingFrom: (f = msg.getStartingFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.GetFactValuesArgs}
 */
proto.api_container_api.GetFactValuesArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.GetFactValuesArgs;
  return proto.api_container_api.GetFactValuesArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.GetFactValuesArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.GetFactValuesArgs}
 */
proto.api_container_api.GetFactValuesArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFactName(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartingFrom(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.GetFactValuesArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.GetFactValuesArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.GetFactValuesArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.GetFactValuesArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFactName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStartingFrom();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string service_id = 1;
 * @return {string}
 */
proto.api_container_api.GetFactValuesArgs.prototype.getServiceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.GetFactValuesArgs} returns this
 */
proto.api_container_api.GetFactValuesArgs.prototype.setServiceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string fact_name = 2;
 * @return {string}
 */
proto.api_container_api.GetFactValuesArgs.prototype.getFactName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.GetFactValuesArgs} returns this
 */
proto.api_container_api.GetFactValuesArgs.prototype.setFactName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp starting_from = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api_container_api.GetFactValuesArgs.prototype.getStartingFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api_container_api.GetFactValuesArgs} returns this
*/
proto.api_container_api.GetFactValuesArgs.prototype.setStartingFrom = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_container_api.GetFactValuesArgs} returns this
 */
proto.api_container_api.GetFactValuesArgs.prototype.clearStartingFrom = function() {
  return this.setStartingFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_container_api.GetFactValuesArgs.prototype.hasStartingFrom = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api_container_api.GetFactValuesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.GetFactValuesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.GetFactValuesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.GetFactValuesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.GetFactValuesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    factValuesList: jspb.Message.toObjectList(msg.getFactValuesList(),
    proto.api_container_api.FactValue.toObject, includeInstance),
    lastTimestampFromPage: (f = msg.getLastTimestampFromPage()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.GetFactValuesResponse}
 */
proto.api_container_api.GetFactValuesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.GetFactValuesResponse;
  return proto.api_container_api.GetFactValuesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.GetFactValuesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.GetFactValuesResponse}
 */
proto.api_container_api.GetFactValuesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api_container_api.FactValue;
      reader.readMessage(value,proto.api_container_api.FactValue.deserializeBinaryFromReader);
      msg.addFactValues(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastTimestampFromPage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.GetFactValuesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.GetFactValuesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.GetFactValuesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.GetFactValuesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFactValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api_container_api.FactValue.serializeBinaryToWriter
    );
  }
  f = message.getLastTimestampFromPage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * repeated FactValue fact_values = 1;
 * @return {!Array<!proto.api_container_api.FactValue>}
 */
proto.api_container_api.GetFactValuesResponse.prototype.getFactValuesList = function() {
  return /** @type{!Array<!proto.api_container_api.FactValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api_container_api.FactValue, 1));
};


/**
 * @param {!Array<!proto.api_container_api.FactValue>} value
 * @return {!proto.api_container_api.GetFactValuesResponse} returns this
*/
proto.api_container_api.GetFactValuesResponse.prototype.setFactValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api_container_api.FactValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api_container_api.FactValue}
 */
proto.api_container_api.GetFactValuesResponse.prototype.addFactValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api_container_api.FactValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api_container_api.GetFactValuesResponse} returns this
 */
proto.api_container_api.GetFactValuesResponse.prototype.clearFactValuesList = function() {
  return this.setFactValuesList([]);
};


/**
 * optional google.protobuf.Timestamp last_timestamp_from_page = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api_container_api.GetFactValuesResponse.prototype.getLastTimestampFromPage = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api_container_api.GetFactValuesResponse} returns this
*/
proto.api_container_api.GetFactValuesResponse.prototype.setLastTimestampFromPage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_container_api.GetFactValuesResponse} returns this
 */
proto.api_container_api.GetFactValuesResponse.prototype.clearLastTimestampFromPage = function() {
  return this.setLastTimestampFromPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_container_api.GetFactValuesResponse.prototype.hasLastTimestampFromPage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api_container_api.FactValue.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.api_container_api.FactValue.FactValueCase = {
  FACT_VALUE_NOT_SET: 0,
  STRING_VALUE: 1
};

/**
 * @return {proto.api_container_api.FactValue.FactValueCase}
 */
proto.api_container_api.FactValue.prototype.getFactValueCase = function() {
  return /** @type {proto.api_container_api.FactValue.FactValueCase} */(jspb.Message.computeOneofCase(this, proto.api_container_api.FactValue.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.FactValue.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.FactValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.FactValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.FactValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    stringValue: jspb.Message.getFieldWithDefault(msg, 1, ""),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.FactValue}
 */
proto.api_container_api.FactValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.FactValue;
  return proto.api_container_api.FactValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.FactValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.FactValue}
 */
proto.api_container_api.FactValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringValue(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.FactValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.FactValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.FactValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.FactValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string string_value = 1;
 * @return {string}
 */
proto.api_container_api.FactValue.prototype.getStringValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.FactValue} returns this
 */
proto.api_container_api.FactValue.prototype.setStringValue = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.api_container_api.FactValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api_container_api.FactValue} returns this
 */
proto.api_container_api.FactValue.prototype.clearStringValue = function() {
  return jspb.Message.setOneofField(this, 1, proto.api_container_api.FactValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_container_api.FactValue.prototype.hasStringValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api_container_api.FactValue.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api_container_api.FactValue} returns this
*/
proto.api_container_api.FactValue.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_container_api.FactValue} returns this
 */
proto.api_container_api.FactValue.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_container_api.FactValue.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.ConstantFactRecipe.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.ConstantFactRecipe.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.ConstantFactRecipe} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.ConstantFactRecipe.toObject = function(includeInstance, msg) {
  var f, obj = {
    factValue: (f = msg.getFactValue()) && proto.api_container_api.FactValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.ConstantFactRecipe}
 */
proto.api_container_api.ConstantFactRecipe.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.ConstantFactRecipe;
  return proto.api_container_api.ConstantFactRecipe.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.ConstantFactRecipe} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.ConstantFactRecipe}
 */
proto.api_container_api.ConstantFactRecipe.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api_container_api.FactValue;
      reader.readMessage(value,proto.api_container_api.FactValue.deserializeBinaryFromReader);
      msg.setFactValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.ConstantFactRecipe.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.ConstantFactRecipe.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.ConstantFactRecipe} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.ConstantFactRecipe.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFactValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api_container_api.FactValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional FactValue fact_value = 1;
 * @return {?proto.api_container_api.FactValue}
 */
proto.api_container_api.ConstantFactRecipe.prototype.getFactValue = function() {
  return /** @type{?proto.api_container_api.FactValue} */ (
    jspb.Message.getWrapperField(this, proto.api_container_api.FactValue, 1));
};


/**
 * @param {?proto.api_container_api.FactValue|undefined} value
 * @return {!proto.api_container_api.ConstantFactRecipe} returns this
*/
proto.api_container_api.ConstantFactRecipe.prototype.setFactValue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_container_api.ConstantFactRecipe} returns this
 */
proto.api_container_api.ConstantFactRecipe.prototype.clearFactValue = function() {
  return this.setFactValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_container_api.ConstantFactRecipe.prototype.hasFactValue = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api_container_api.ExecFactRecipe.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.ExecFactRecipe.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.ExecFactRecipe.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.ExecFactRecipe} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.ExecFactRecipe.toObject = function(includeInstance, msg) {
  var f, obj = {
    cmdArgsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.ExecFactRecipe}
 */
proto.api_container_api.ExecFactRecipe.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.ExecFactRecipe;
  return proto.api_container_api.ExecFactRecipe.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.ExecFactRecipe} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.ExecFactRecipe}
 */
proto.api_container_api.ExecFactRecipe.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addCmdArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.ExecFactRecipe.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.ExecFactRecipe.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.ExecFactRecipe} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.ExecFactRecipe.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCmdArgsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string cmd_args = 1;
 * @return {!Array<string>}
 */
proto.api_container_api.ExecFactRecipe.prototype.getCmdArgsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api_container_api.ExecFactRecipe} returns this
 */
proto.api_container_api.ExecFactRecipe.prototype.setCmdArgsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api_container_api.ExecFactRecipe} returns this
 */
proto.api_container_api.ExecFactRecipe.prototype.addCmdArgs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api_container_api.ExecFactRecipe} returns this
 */
proto.api_container_api.ExecFactRecipe.prototype.clearCmdArgsList = function() {
  return this.setCmdArgsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.HttpRequestFactRecipe.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.HttpRequestFactRecipe.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.HttpRequestFactRecipe} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.HttpRequestFactRecipe.toObject = function(includeInstance, msg) {
  var f, obj = {
    portId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    endpoint: jspb.Message.getFieldWithDefault(msg, 2, ""),
    method: jspb.Message.getFieldWithDefault(msg, 3, 0),
    contentType: jspb.Message.getFieldWithDefault(msg, 4, ""),
    body: jspb.Message.getFieldWithDefault(msg, 5, ""),
    fieldExtractor: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.HttpRequestFactRecipe}
 */
proto.api_container_api.HttpRequestFactRecipe.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.HttpRequestFactRecipe;
  return proto.api_container_api.HttpRequestFactRecipe.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.HttpRequestFactRecipe} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.HttpRequestFactRecipe}
 */
proto.api_container_api.HttpRequestFactRecipe.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPortId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndpoint(value);
      break;
    case 3:
      var value = /** @type {!proto.api_container_api.HttpRequestMethod} */ (reader.readEnum());
      msg.setMethod(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContentType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBody(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldExtractor(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.HttpRequestFactRecipe.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.HttpRequestFactRecipe.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.HttpRequestFactRecipe} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.HttpRequestFactRecipe.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPortId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEndpoint();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getContentType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBody();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string port_id = 1;
 * @return {string}
 */
proto.api_container_api.HttpRequestFactRecipe.prototype.getPortId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.HttpRequestFactRecipe} returns this
 */
proto.api_container_api.HttpRequestFactRecipe.prototype.setPortId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string endpoint = 2;
 * @return {string}
 */
proto.api_container_api.HttpRequestFactRecipe.prototype.getEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.HttpRequestFactRecipe} returns this
 */
proto.api_container_api.HttpRequestFactRecipe.prototype.setEndpoint = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional HttpRequestMethod method = 3;
 * @return {!proto.api_container_api.HttpRequestMethod}
 */
proto.api_container_api.HttpRequestFactRecipe.prototype.getMethod = function() {
  return /** @type {!proto.api_container_api.HttpRequestMethod} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.api_container_api.HttpRequestMethod} value
 * @return {!proto.api_container_api.HttpRequestFactRecipe} returns this
 */
proto.api_container_api.HttpRequestFactRecipe.prototype.setMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string content_type = 4;
 * @return {string}
 */
proto.api_container_api.HttpRequestFactRecipe.prototype.getContentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.HttpRequestFactRecipe} returns this
 */
proto.api_container_api.HttpRequestFactRecipe.prototype.setContentType = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string body = 5;
 * @return {string}
 */
proto.api_container_api.HttpRequestFactRecipe.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.HttpRequestFactRecipe} returns this
 */
proto.api_container_api.HttpRequestFactRecipe.prototype.setBody = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string field_extractor = 6;
 * @return {string}
 */
proto.api_container_api.HttpRequestFactRecipe.prototype.getFieldExtractor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.HttpRequestFactRecipe} returns this
 */
proto.api_container_api.HttpRequestFactRecipe.prototype.setFieldExtractor = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.api_container_api.HttpRequestFactRecipe} returns this
 */
proto.api_container_api.HttpRequestFactRecipe.prototype.clearFieldExtractor = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_container_api.HttpRequestFactRecipe.prototype.hasFieldExtractor = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api_container_api.FactRecipe.oneofGroups_ = [[3,4,5]];

/**
 * @enum {number}
 */
proto.api_container_api.FactRecipe.FactRecipeDefinitionCase = {
  FACT_RECIPE_DEFINITION_NOT_SET: 0,
  CONSTANT_FACT: 3,
  EXEC_FACT: 4,
  HTTP_REQUEST_FACT: 5
};

/**
 * @return {proto.api_container_api.FactRecipe.FactRecipeDefinitionCase}
 */
proto.api_container_api.FactRecipe.prototype.getFactRecipeDefinitionCase = function() {
  return /** @type {proto.api_container_api.FactRecipe.FactRecipeDefinitionCase} */(jspb.Message.computeOneofCase(this, proto.api_container_api.FactRecipe.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_container_api.FactRecipe.prototype.toObject = function(opt_includeInstance) {
  return proto.api_container_api.FactRecipe.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_container_api.FactRecipe} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.FactRecipe.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    factName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    constantFact: (f = msg.getConstantFact()) && proto.api_container_api.ConstantFactRecipe.toObject(includeInstance, f),
    execFact: (f = msg.getExecFact()) && proto.api_container_api.ExecFactRecipe.toObject(includeInstance, f),
    httpRequestFact: (f = msg.getHttpRequestFact()) && proto.api_container_api.HttpRequestFactRecipe.toObject(includeInstance, f),
    refreshInterval: (f = msg.getRefreshInterval()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_container_api.FactRecipe}
 */
proto.api_container_api.FactRecipe.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_container_api.FactRecipe;
  return proto.api_container_api.FactRecipe.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_container_api.FactRecipe} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_container_api.FactRecipe}
 */
proto.api_container_api.FactRecipe.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFactName(value);
      break;
    case 3:
      var value = new proto.api_container_api.ConstantFactRecipe;
      reader.readMessage(value,proto.api_container_api.ConstantFactRecipe.deserializeBinaryFromReader);
      msg.setConstantFact(value);
      break;
    case 4:
      var value = new proto.api_container_api.ExecFactRecipe;
      reader.readMessage(value,proto.api_container_api.ExecFactRecipe.deserializeBinaryFromReader);
      msg.setExecFact(value);
      break;
    case 5:
      var value = new proto.api_container_api.HttpRequestFactRecipe;
      reader.readMessage(value,proto.api_container_api.HttpRequestFactRecipe.deserializeBinaryFromReader);
      msg.setHttpRequestFact(value);
      break;
    case 6:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setRefreshInterval(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_container_api.FactRecipe.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_container_api.FactRecipe.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_container_api.FactRecipe} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_container_api.FactRecipe.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFactName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getConstantFact();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api_container_api.ConstantFactRecipe.serializeBinaryToWriter
    );
  }
  f = message.getExecFact();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.api_container_api.ExecFactRecipe.serializeBinaryToWriter
    );
  }
  f = message.getHttpRequestFact();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api_container_api.HttpRequestFactRecipe.serializeBinaryToWriter
    );
  }
  f = message.getRefreshInterval();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional string service_id = 1;
 * @return {string}
 */
proto.api_container_api.FactRecipe.prototype.getServiceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.FactRecipe} returns this
 */
proto.api_container_api.FactRecipe.prototype.setServiceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string fact_name = 2;
 * @return {string}
 */
proto.api_container_api.FactRecipe.prototype.getFactName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_container_api.FactRecipe} returns this
 */
proto.api_container_api.FactRecipe.prototype.setFactName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ConstantFactRecipe constant_fact = 3;
 * @return {?proto.api_container_api.ConstantFactRecipe}
 */
proto.api_container_api.FactRecipe.prototype.getConstantFact = function() {
  return /** @type{?proto.api_container_api.ConstantFactRecipe} */ (
    jspb.Message.getWrapperField(this, proto.api_container_api.ConstantFactRecipe, 3));
};


/**
 * @param {?proto.api_container_api.ConstantFactRecipe|undefined} value
 * @return {!proto.api_container_api.FactRecipe} returns this
*/
proto.api_container_api.FactRecipe.prototype.setConstantFact = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.api_container_api.FactRecipe.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_container_api.FactRecipe} returns this
 */
proto.api_container_api.FactRecipe.prototype.clearConstantFact = function() {
  return this.setConstantFact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_container_api.FactRecipe.prototype.hasConstantFact = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ExecFactRecipe exec_fact = 4;
 * @return {?proto.api_container_api.ExecFactRecipe}
 */
proto.api_container_api.FactRecipe.prototype.getExecFact = function() {
  return /** @type{?proto.api_container_api.ExecFactRecipe} */ (
    jspb.Message.getWrapperField(this, proto.api_container_api.ExecFactRecipe, 4));
};


/**
 * @param {?proto.api_container_api.ExecFactRecipe|undefined} value
 * @return {!proto.api_container_api.FactRecipe} returns this
*/
proto.api_container_api.FactRecipe.prototype.setExecFact = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.api_container_api.FactRecipe.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_container_api.FactRecipe} returns this
 */
proto.api_container_api.FactRecipe.prototype.clearExecFact = function() {
  return this.setExecFact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_container_api.FactRecipe.prototype.hasExecFact = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional HttpRequestFactRecipe http_request_fact = 5;
 * @return {?proto.api_container_api.HttpRequestFactRecipe}
 */
proto.api_container_api.FactRecipe.prototype.getHttpRequestFact = function() {
  return /** @type{?proto.api_container_api.HttpRequestFactRecipe} */ (
    jspb.Message.getWrapperField(this, proto.api_container_api.HttpRequestFactRecipe, 5));
};


/**
 * @param {?proto.api_container_api.HttpRequestFactRecipe|undefined} value
 * @return {!proto.api_container_api.FactRecipe} returns this
*/
proto.api_container_api.FactRecipe.prototype.setHttpRequestFact = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.api_container_api.FactRecipe.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_container_api.FactRecipe} returns this
 */
proto.api_container_api.FactRecipe.prototype.clearHttpRequestFact = function() {
  return this.setHttpRequestFact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_container_api.FactRecipe.prototype.hasHttpRequestFact = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Duration refresh_interval = 6;
 * @return {?proto.google.protobuf.Duration}
 */
proto.api_container_api.FactRecipe.prototype.getRefreshInterval = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 6));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.api_container_api.FactRecipe} returns this
*/
proto.api_container_api.FactRecipe.prototype.setRefreshInterval = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_container_api.FactRecipe} returns this
 */
proto.api_container_api.FactRecipe.prototype.clearRefreshInterval = function() {
  return this.setRefreshInterval(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_container_api.FactRecipe.prototype.hasRefreshInterval = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * @enum {number}
 */
proto.api_container_api.HttpRequestMethod = {
  GET: 0,
  POST: 1
};

goog.object.extend(exports, proto.api_container_api);
