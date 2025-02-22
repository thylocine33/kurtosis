import {ok, err, Result} from "neverthrow";
import type {ClientReadableStream, ServiceError} from "@grpc/grpc-js";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {
    AddServicesArgs,
    AddServicesResponse,
    RemoveServiceArgs,
    WaitForHttpGetEndpointAvailabilityArgs,
    WaitForHttpPostEndpointAvailabilityArgs,
    GetServicesResponse,
    ExecCommandArgs,
    ExecCommandResponse,
    UploadFilesArtifactArgs,
    UploadFilesArtifactResponse,
    StoreWebFilesArtifactArgs,
    StoreWebFilesArtifactResponse,
    GetServicesArgs,
    RunStarlarkScriptArgs,
    RunStarlarkPackageArgs,
    StarlarkRunResponseLine,
    DownloadFilesArtifactResponse,
    DownloadFilesArtifactArgs,
    GetExistingAndHistoricalServiceIdentifiersResponse, ListFilesArtifactNamesAndUuidsResponse,
} from "../../kurtosis_core_rpc_api_bindings/api_container_service_pb";
import type { ApiContainerServiceClient as ApiContainerServiceClientNode } from "../../kurtosis_core_rpc_api_bindings/api_container_service_grpc_pb";
import { GenericApiContainerClient } from "./generic_api_container_client";
import { EnclaveUUID } from "./enclave_context";
import {RemoveServiceResponse} from "../../kurtosis_core_rpc_api_bindings/api_container_service_pb";
import {Readable} from "stream";

export class GrpcNodeApiContainerClient implements GenericApiContainerClient {

    private readonly client: ApiContainerServiceClientNode;
    private readonly enclaveUuid: EnclaveUUID;
    private readonly enclaveName: string;

    constructor(client: ApiContainerServiceClientNode, enclaveUuid: EnclaveUUID, enclaveName: string) {
        this.client = client;
        this.enclaveUuid = enclaveUuid;
        this.enclaveName = enclaveName;
    }

    public getEnclaveUuid(): EnclaveUUID {
        return this.enclaveUuid;
    }

    public getEnclaveName():string {
        return this.enclaveName;
    }

    public async runStarlarkScript(serializedStarlarkScript: RunStarlarkScriptArgs): Promise<Result<Readable, Error>> {
        const promiseRunStarlarkScript: Promise<Result<ClientReadableStream<StarlarkRunResponseLine>, Error>> = new Promise((resolve, _unusedReject) => {
            resolve(ok(this.client.runStarlarkScript(serializedStarlarkScript)))
        })
        const starlarkScriptRunResult: Result<Readable, Error> = await promiseRunStarlarkScript;
        if (starlarkScriptRunResult.isErr()) {
            return err(starlarkScriptRunResult.error)
        }
        return ok(starlarkScriptRunResult.value)
    }

    public async runStarlarkPackage(starlarkPackageArgs: RunStarlarkPackageArgs): Promise<Result<Readable, Error>> {
        const promiseRunStarlarkPackage: Promise<Result<ClientReadableStream<StarlarkRunResponseLine>, Error>> = new Promise((resolve, _unusedReject) => {
            resolve(ok(this.client.runStarlarkPackage(starlarkPackageArgs)))
        })
        const runStarlarkPackageResult: Result<Readable, Error> = await promiseRunStarlarkPackage;
        if (runStarlarkPackageResult.isErr()) {
            return err(runStarlarkPackageResult.error)
        }
        return ok(runStarlarkPackageResult.value)
    }

    public async addServices(addServicesArgs: AddServicesArgs): Promise<Result<AddServicesResponse, Error>>{
        const promiseAddServices: Promise<Result<AddServicesResponse, Error>> = new Promise((resolve, _unusedReject) => {
            this.client.addServices(addServicesArgs, (error: ServiceError | null, response?: AddServicesResponse) => {
                if (error === null) {
                    if (!response) {
                        resolve(err(new Error("No error was encountered but the response was still falsy; this should never happen")));
                    } else {
                        resolve(ok(response!));
                    }
                } else {
                    resolve(err(error));
                }
            })
        });
        const resultAddServices: Result<AddServicesResponse, Error> = await promiseAddServices;
        if (resultAddServices.isErr()) {
            return err(resultAddServices.error);
        }

        const addServicesResponse: AddServicesResponse = resultAddServices.value;
        return ok(addServicesResponse)
    }

    public async removeService(args: RemoveServiceArgs): Promise<Result<RemoveServiceResponse, Error>> {
        const removeServicePromise: Promise<Result<RemoveServiceResponse, Error>> = new Promise((resolve, _unusedReject) => {
            this.client.removeService(args, (error: ServiceError | null, removeServiceResponse: RemoveServiceResponse | undefined) => {
                if (error === null) {
                    if (!removeServiceResponse) {
                        resolve(err(new Error("No error was encountered but the response was still falsy; this should never happen")))
                    } else {
                        resolve(ok(removeServiceResponse!));
                    }
                } else {
                    resolve(err(error));
                }
            })
        });
        const resultRemoveService: Result<RemoveServiceResponse, Error> = await removeServicePromise;
        if (resultRemoveService.isErr()) {
            return err(resultRemoveService.error);
        }
        
        return ok(resultRemoveService.value);
    }

    public async waitForHttpGetEndpointAvailability(availabilityArgs: WaitForHttpGetEndpointAvailabilityArgs): Promise<Result<null, Error>> {
        const promiseWaitForHttpGetEndpointAvailability: Promise<Result<null, Error>> = new Promise((resolve, _unusedReject) => {
            this.client.waitForHttpGetEndpointAvailability(availabilityArgs, (error: ServiceError | null, _unusedResponse?: google_protobuf_empty_pb.Empty) => {
                if (error === null) {
                    resolve(ok(null));
                } else {
                    resolve(err(error));
                }
            })
        });
        const resultWaitForHttpGetEndpointAvailability: Result<null, Error> = await promiseWaitForHttpGetEndpointAvailability;
        if (resultWaitForHttpGetEndpointAvailability.isErr()) {
            return err(resultWaitForHttpGetEndpointAvailability.error);
        }

        return ok(null);
    }

    public async waitForHttpPostEndpointAvailability(availabilityArgs: WaitForHttpPostEndpointAvailabilityArgs): Promise<Result<null, Error>> {
        const promiseWaitForHttpPostEndpointAvailability: Promise<Result<null, Error>> = new Promise((resolve, _unusedReject) => {
            this.client.waitForHttpPostEndpointAvailability(availabilityArgs, (error: ServiceError | null, _unusedResponse?: google_protobuf_empty_pb.Empty) => {
                if (error === null) {
                    resolve(ok(null));
                } else {
                    resolve(err(error));
                }
            })
        });
        const resultWaitForHttpPostEndpointAvailability: Result<null, Error> = await promiseWaitForHttpPostEndpointAvailability;
        if (resultWaitForHttpPostEndpointAvailability.isErr()) {
            return err(resultWaitForHttpPostEndpointAvailability.error);
        }

        return ok(null);
    }

    public async getServices(getServicesArgs: GetServicesArgs): Promise<Result<GetServicesResponse, Error>> {
        const promiseGetServices: Promise<Result<GetServicesResponse, Error>> = new Promise((resolve, _unusedReject) => {
            this.client.getServices(getServicesArgs, (error: ServiceError | null, response?: GetServicesResponse) => {
                if (error === null) {
                    if (!response) {
                        resolve(err(new Error("No error was encountered but the response was still falsy; this should never happen")));
                    } else {
                        resolve(ok(response!));
                    }
                } else {
                    resolve(err(error));
                }
            })
        });

        const resultGetServices: Result<GetServicesResponse, Error> = await promiseGetServices;
        if (resultGetServices.isErr()) {
            return err(resultGetServices.error);
        }

        const getServicesResponse = resultGetServices.value;
        return ok(getServicesResponse)
    }

    public async execCommand(execCommandArgs: ExecCommandArgs): Promise<Result<ExecCommandResponse, Error>> {
        const execCommandPromise: Promise<Result<ExecCommandResponse, Error>> = new Promise((resolve, _unusedReject) => {
            this.client.execCommand(execCommandArgs, (error: ServiceError | null, response?: ExecCommandResponse) => {
                if (error === null) {
                    if (!response) {
                        resolve(err(new Error("No error was encountered but the response was still falsy; this should never happen")));
                    } else {
                        resolve(ok(response!));
                    }
                } else {
                    resolve(err(error));
                }
            })
        });
        const execCommandResponseResult: Result<ExecCommandResponse, Error> = await execCommandPromise;
        if(execCommandResponseResult.isErr()){
            return err(execCommandResponseResult.error)
        }

        const execCommandResponse = execCommandResponseResult.value;
        return ok(execCommandResponse)
    }

    public async uploadFiles(uploadFilesArtifactArgs: UploadFilesArtifactArgs): Promise<Result<UploadFilesArtifactResponse, Error>> {
        const uploadFilesArtifactPromise: Promise<Result<UploadFilesArtifactResponse, Error>> = new Promise((resolve, _unusedReject) => {
            this.client.uploadFilesArtifact(uploadFilesArtifactArgs, (error: ServiceError | null, response?: UploadFilesArtifactResponse) => {
                if (error === null) {
                    if (!response) {
                        resolve(err(new Error("No error was encountered but the response was still falsy; this should never happen")));
                    } else {
                        resolve(ok(response!));
                    }
                } else {
                    resolve(err(error));
                }
            })
        });
        const uploadFilesArtifactResponseResult: Result<UploadFilesArtifactResponse, Error> = await uploadFilesArtifactPromise;
        if(uploadFilesArtifactResponseResult.isErr()){
            return err(uploadFilesArtifactResponseResult.error)
        }

        const uploadFilesArtifactResponse = uploadFilesArtifactResponseResult.value
        return ok(uploadFilesArtifactResponse)
    }

    public async storeWebFilesArtifact(storeWebFilesArtifactArgs: StoreWebFilesArtifactArgs): Promise<Result<StoreWebFilesArtifactResponse, Error>> {
        const storeWebFilesArtifactPromise: Promise<Result<StoreWebFilesArtifactResponse, Error>> = new Promise((resolve, _unusedReject) => {
            this.client.storeWebFilesArtifact(storeWebFilesArtifactArgs, (error: ServiceError | null, response?: StoreWebFilesArtifactResponse) => {
                if (error === null) {
                    if (!response) {
                        resolve(err(new Error("No error was encountered but the response was still falsy; this should never happen")));
                    } else {
                        resolve(ok(response!));
                    }
                } else {
                    resolve(err(error));
                }
            })
        });

        const storeWebFilesArtifactResponseResult: Result<StoreWebFilesArtifactResponse, Error> = await storeWebFilesArtifactPromise;
        if(storeWebFilesArtifactResponseResult.isErr()){
            return err(storeWebFilesArtifactResponseResult.error)
        }

        const storeWebFilesArtifactResponse = storeWebFilesArtifactResponseResult.value;
        return ok(storeWebFilesArtifactResponse)
    }

    public async downloadFilesArtifact(downloadFilesArtifactArgs: DownloadFilesArtifactArgs): Promise<Result<DownloadFilesArtifactResponse, Error>> {
        const downloadFilesArtifactPromise: Promise<Result<DownloadFilesArtifactResponse, Error>> = new Promise((resolve, _unusedReject) => {
            this.client.downloadFilesArtifact(downloadFilesArtifactArgs, (error: ServiceError | null, response?: DownloadFilesArtifactResponse) => {
                if (error === null) {
                    if (!response) {
                        resolve(err(new Error("No error was encountered but the response was still falsy; this should never happen")));
                    } else {
                        resolve(ok(response!));
                    }
                } else {
                    resolve(err(error));
                }
            })
        });

        const downloadFilesArtifactResponseResult: Result<DownloadFilesArtifactResponse, Error> = await downloadFilesArtifactPromise;
        if(downloadFilesArtifactResponseResult.isErr()){
            return err(downloadFilesArtifactResponseResult.error)
        }

        const downloadFilesArtifactResponse = downloadFilesArtifactResponseResult.value;
        return ok(downloadFilesArtifactResponse)
    }

    public async getExistingAndHistoricalServiceIdentifiers(): Promise<Result<GetExistingAndHistoricalServiceIdentifiersResponse, Error>>{
        const emptyArg: google_protobuf_empty_pb.Empty = new google_protobuf_empty_pb.Empty()
        const getExistingAndHistoricalServiceIdentifiersPromise: Promise<Result<GetExistingAndHistoricalServiceIdentifiersResponse, Error>> = new Promise((resolve, _unusedReject) => {
            this.client.getExistingAndHistoricalServiceIdentifiers(emptyArg, (error: ServiceError | null, response?: GetExistingAndHistoricalServiceIdentifiersResponse) => {
                if (error === null) {
                    if (!response) {
                        resolve(err(new Error("No error was encountered but the response was still falsy; this should never happen")));
                    } else {
                        resolve(ok(response!));
                    }
                } else {
                    resolve(err(error));
                }
            })
        });

        const getExistingAndHistoricalServiceIdentifiersResult: Result<GetExistingAndHistoricalServiceIdentifiersResponse, Error> = await getExistingAndHistoricalServiceIdentifiersPromise;
        if (getExistingAndHistoricalServiceIdentifiersResult.isErr()) {
            return err(getExistingAndHistoricalServiceIdentifiersResult.error)
        }

        return ok(getExistingAndHistoricalServiceIdentifiersResult.value);
    }

    public async getAllFilesArtifactNamesAndUuids(): Promise<Result<ListFilesArtifactNamesAndUuidsResponse, Error>> {
        const emptyArg: google_protobuf_empty_pb.Empty = new google_protobuf_empty_pb.Empty()
        const getAllFilesArtifactNamesAndUuidsPromise: Promise<Result<ListFilesArtifactNamesAndUuidsResponse, Error>> = new Promise((resolve, _unusedReject) => {
            this.client.listFilesArtifactNamesAndUuids(emptyArg, {},(error: ServiceError | null, response?: ListFilesArtifactNamesAndUuidsResponse) => {
                if (error === null) {
                    if (!response) {
                        resolve(err(new Error("No error was encountered but the response was still falsy; this should never happen")));
                    } else {
                        resolve(ok(response!));
                    }
                } else {
                    resolve(err(error));
                }
            })
        });

        const getAllFilesArtifactNamesAndUuidsResult: Result<ListFilesArtifactNamesAndUuidsResponse, Error> = await getAllFilesArtifactNamesAndUuidsPromise;
        if (getAllFilesArtifactNamesAndUuidsResult.isErr()) {
            return err(getAllFilesArtifactNamesAndUuidsResult.error)
        }

        return ok(getAllFilesArtifactNamesAndUuidsResult.value);
    }
}
