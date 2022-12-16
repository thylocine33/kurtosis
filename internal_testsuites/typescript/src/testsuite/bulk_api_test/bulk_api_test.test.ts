import {
    ContainerConfig,
    ContainerConfigBuilder,
    FilesArtifactUUID, TransportProtocol,
    PortSpec,
    ServiceContext,
    ServiceID
} from "kurtosis-sdk"
import {Result, ok, err} from "neverthrow"
import log from "loglevel"

import { createEnclave } from "../../test_helpers/enclave_setup";
import * as fs from 'fs';
import * as path from "path";
import * as os from "os";
import * as datastoreApi from "example-datastore-server-api-lib";
import * as serverApi from "example-api-server-api-lib";

const TEST_NAME = "bulk-api";
const IS_PARTITIONING_ENABLED = false;
const DATASTORE_SERVICE_ID = "datastore";
const API_SERVICE_ID = "api";

const CONFIG_FILENAME = "config.json"
const CONFIG_MOUNTPATH_ON_API_CONTAINER = "/config"

const DATASTORE_IMAGE = "kurtosistech/example-datastore-server";
const API_SERVICE_IMAGE = "kurtosistech/example-api-server";

const DATASTORE_PORT_ID = "rpc";
const API_PORT_ID = "rpc";

const NUM_SERVICES_TO_ADD : number = 3


const DATASTORE_PORT_SPEC = new PortSpec(
    datastoreApi.LISTEN_PORT,
    TransportProtocol.TCP,
)
const API_PORT_SPEC = new PortSpec(
    serverApi.LISTEN_PORT,
    TransportProtocol.TCP,
)

jest.setTimeout(180000)

test("Test adding services to an enclave simultaneously", async () => {
    // ------------------------------------- ENGINE SETUP ----------------------------------------------
    const createEnclaveResult = await createEnclave(TEST_NAME, IS_PARTITIONING_ENABLED)
    if(createEnclaveResult.isErr()) { throw createEnclaveResult.error }
    const { enclaveContext, stopEnclaveFunction } = createEnclaveResult.value

    try {
        // ------------------------------------- TEST SETUP ----------------------------------------------
        log.info("Adding three datastore services simulataneously")
        const datastoreServiceIds : Map<number, ServiceID> = new Map<number, ServiceID>();
        const datastoreContainerConfig  = new Map<ServiceID, ContainerConfig>();
        for(let i = 0; i < NUM_SERVICES_TO_ADD; i++){
            const serviceId = `${DATASTORE_SERVICE_ID}-${i}`
            datastoreServiceIds.set(i, serviceId)
            datastoreContainerConfig.set(serviceId, getDatastoreContainerConfig())
        }

        // ------------------------------------- TEST RUN ----------------------------------------------
        const addDatastoreServicesResult : Result<[Map<string, ServiceContext>, Map<string, Error>], Error>
            = await enclaveContext.addServices(datastoreContainerConfig)
        if(addDatastoreServicesResult.isErr()){ throw addDatastoreServicesResult.error }

        const successfulDatastoreServiceContexts = addDatastoreServicesResult.value[0]
        const failedDatastoreServiceErrs = addDatastoreServicesResult.value[1]

        if (<number>successfulDatastoreServiceContexts.size != NUM_SERVICES_TO_ADD){
            throw new Error(`Expected number of successful datastore services added to be ${NUM_SERVICES_TO_ADD}, but the actual number of successful datastore services added was '${successfulDatastoreServiceContexts.size}'`)
        }
        if (<number>failedDatastoreServiceErrs.size != 0){
            throw new Error(`Expected no failed datastore services but the actual number of failed datastore services was '${failedDatastoreServiceErrs.size}'`)
        }

        const apiServiceConfigs  = new Map<ServiceID, ContainerConfig>();
        for(let i = 0; i < NUM_SERVICES_TO_ADD; i++){
            const datastoreServiceId : ServiceID | undefined = datastoreServiceIds.get(i)
            if (datastoreServiceId == undefined) {
                throw new Error(`${datastoreServiceId} was not found in the map of datastore service Ids. This is a Kurtosis bug.`)
            }
            const datastoreServiceCtx : ServiceContext | undefined = successfulDatastoreServiceContexts.get(datastoreServiceId)
            if (datastoreServiceCtx == undefined) {
                throw new Error(`${datastoreServiceId} was not found in the map of successfully started datastore services. This is a Kurtosis bug.`)
            }
            const apiConfigFileResult : Result<string, Error> = await createApiConfigFile(datastoreServiceCtx.getPrivateIPAddress())
            if(apiConfigFileResult.isErr()){
                throw apiConfigFileResult.error
            }
            const configFilepath = apiConfigFileResult.value
            const uploadFilesResult : Result<string, Error> = await enclaveContext.uploadFiles(configFilepath)
            if(uploadFilesResult.isErr()){
                throw uploadFilesResult.error
            }
            const datastoreConfigArtifactUuid = uploadFilesResult.value
            const serviceId = `${API_SERVICE_ID}-${i}`
            apiServiceConfigs.set(serviceId, getApiServiceContainerConfig(datastoreConfigArtifactUuid))
        }

        // ------------------------------------- TEST RUN ----------------------------------------------
        const addApiServicesResult : Result<[Map<string, ServiceContext>, Map<string, Error>], Error>
            = await enclaveContext.addServices(apiServiceConfigs)
        if(addApiServicesResult.isErr()){ throw addApiServicesResult.error }

        const successfulApiServiceContexts = addApiServicesResult.value[0]
        const failedApiServiceErrs = addApiServicesResult.value[1]

        if (<number><number>successfulApiServiceContexts.size != NUM_SERVICES_TO_ADD){
            throw new Error(`Expected number of successful api services added to be ${NUM_SERVICES_TO_ADD}, but the actual number of successful api services added was '${successfulApiServiceContexts.size}'`)
        }
        if (<number>failedApiServiceErrs.size != 0){
            throw new Error(`Expected no failed api services, but the actual number of failed api services was '${failedApiServiceErrs.size}'`)
        }
    }finally{
        stopEnclaveFunction()
    }
});

function getDatastoreContainerConfig(): ContainerConfig {

    const usedPorts = new Map<string, PortSpec>();
    usedPorts.set(DATASTORE_PORT_ID, DATASTORE_PORT_SPEC);

    const containerConfig = new ContainerConfigBuilder(DATASTORE_IMAGE).withUsedPorts(usedPorts).build();

    return containerConfig;
}

function getApiServiceContainerConfig(
    apiConfigArtifactUuid: FilesArtifactUUID,
): ContainerConfig {

    const usedPorts = new Map<string, PortSpec>();
    usedPorts.set(API_PORT_ID, API_PORT_SPEC);
    const startCmd: string[] = [
        "./example-api-server.bin",
        "--config",
        path.join(CONFIG_MOUNTPATH_ON_API_CONTAINER, CONFIG_FILENAME),
    ]

    const filesArtifactMountpoints = new Map<string, FilesArtifactUUID>()
    filesArtifactMountpoints.set(CONFIG_MOUNTPATH_ON_API_CONTAINER, apiConfigArtifactUuid)

    const containerConfig = new ContainerConfigBuilder(API_SERVICE_IMAGE)
        .withUsedPorts(usedPorts)
        .withFiles(filesArtifactMountpoints)
        .withCmdOverride(startCmd)
        .build()

    return containerConfig

}

async function createApiConfigFile(datastoreIP: string): Promise<Result<string, Error>> {
    const mkdirResult = await fs.promises.mkdtemp(
        `${os.tmpdir()}${path.sep}`,
    ).then(
        (result) => ok(result),
    ).catch(
        (mkdirErr) => err(mkdirErr),
    )
    if (mkdirResult.isErr()) {
        return err(mkdirResult.error);
    }
    const tempDirpath = mkdirResult.value;
    const tempFilepath = path.join(tempDirpath, CONFIG_FILENAME)

    const config = {
        datastoreIp: datastoreIP,
        datastorePort: datastoreApi.LISTEN_PORT,
    };

    const configJSONStringified = JSON.stringify(config);

    log.debug(`API config JSON: ${configJSONStringified}`)

    try {
        fs.writeFileSync(tempFilepath, configJSONStringified);
    } catch (error) {
        log.error("An error occurred writing the serialized config JSON to file")
        if (error instanceof Error) {
            return err(error)
        } else {
            return err(new Error("Encountered error while writing the file, but the error wasn't of type Error"))
        }
    }

    return ok(tempFilepath);

}