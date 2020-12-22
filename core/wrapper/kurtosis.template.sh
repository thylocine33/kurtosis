# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
#
#      Do not modify this file! It will get overwritten when you upgrade Kurtosis!
#
# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


set -euo pipefail



# ============================================================================================
#                                      Constants
# ============================================================================================
# The directory where Kurtosis will store files it uses in between executions, e.g. access tokens
# Can make this configurable if needed
KURTOSIS_DIRPATH="${HOME}/.kurtosis"

KURTOSIS_CORE_TAG="{{.KurtosisCoreVersion}}"
KURTOSIS_DOCKERHUB_ORG="kurtosistech"
INITIALIZER_IMAGE="${KURTOSIS_DOCKERHUB_ORG}/kurtosis-core_initializer:${KURTOSIS_CORE_TAG}"
API_IMAGE="${KURTOSIS_DOCKERHUB_ORG}/kurtosis-core_api:${KURTOSIS_CORE_TAG}"

POSITIONAL_ARG_DEFINITION_FRAGMENTS=2



# ============================================================================================
#                                      Arg Parsing
# ============================================================================================
function print_help_and_exit() {
    echo ""
    echo "$(basename "${0}") {{.OneLinerHelpText}}"
    echo ""
    {{range $text := .LinewiseHelpText}}echo "{{$text}}"
    {{end}}
    echo ""
    exit 1  # Exit with an error code, so that if it gets accidentally called in parent scripts/CI it fails loudly
}



# ============================================================================================
#                                      Arg Parsing
# ============================================================================================
{{range $variable, $value := .DefaultValues}}{{$variable}}="{{$value}}"
{{end}}


POSITIONAL=()
while [ ${#} -gt 0 ]; do
    key="${1}"
    case "${key}" in
        {{range $flagArg := .FlagArgParsingData }}
        {{$flagArg.Flag}})
            {{if $flagArg.DoStoreTrue}}{{$flagArg.Variable}}="true"{{end}}
            {{if $flagArg.DoStoreValue}}{{$flagArg.Variable}}="${1}"
            shift{{end}}
            ;;
        {{end}}
        *)
            POSITIONAL+=("${1}")
            shift
            ;;
    esac
done
set -- "${POSITIONAL[@]}" # restore positional parameters

if "${show_help}"; then
    print_help_and_exit
fi



# ============================================================================================
#                                    Arg Validation
# ============================================================================================
if [ "${#}" -ne {{.NumPositionalArgs}} ]; then
    echo "Error: Expected {{.NumPositionalArgs}} positional variables but got ${#}" >&2
    print_help_and_exit
fi

{{range $variable := .RequiredVariables}}if [ -z "${{$variable}}" ]; then
    echo "Error: Variable '{{$variable}}' cannot be empty" >&2
    exit 1
fi{{end}}



# ============================================================================================
#                                    Main Logic
# ============================================================================================
# Kurtosis needs a Docker volume to store its execution data in
# To learn more about volumes, see: https://docs.docker.com/storage/volumes/
sanitized_image="$(echo "${test_suite_image}" | sed 's/[^a-zA-Z0-9_.-]/_/g')"
suite_execution_volume="$(date +%Y-%m-%dT%H.%M.%S)_${sanitized_image}"
if ! docker volume create "${suite_execution_volume}"; then
    echo "Error: Failed to create a Docker volume to store the execution files in" >&2
    exit 1
fi

if ! mkdir -p "${KURTOSIS_DIRPATH}"; then
    echo "Error: Failed to create the Kurtosis directory at '${KURTOSIS_DIRPATH}'" >&2
    exit 1
fi

docker_environment_configs= << EOF
CLIENT_ID="${client_id}"
CLIENT_SECRET="${client_id}"
CUSTOM_ENV_VARS_JSON="${custom_env_vars_json}"
DO_LIST="${do_list}"
KURTOSIS_API_IMAGE="${API_IMAGE}"
KURTOSIS_LOG_LEVEL="${kurtosis_log_level}"
PARALLELISM="${parallelism}"
SUITE_EXECUTION_VOLUME="${suite_execution_volume}"
TEST_NAMES="${test_names}"
TEST_SUITE_IMAGE="${test_suite_image}"
TEST_SUITE_LOG_LEVEL="${test_suite_log_level}"
EOF

# Docker only allows you to have spaces in the variable if you escape them or use a Docker env file, so we escape all the w
sanitized_custom_env_vars_json="$(echo "${custom_env_vars_json}" | tr -d '[:space:]')"

docker run \
    `# The Kurtosis initializer runs inside a Docker container, but needs to access to the Docker engine; this is how to do it` \
    `# For more info, see the bottom of: http://jpetazzo.github.io/2015/09/03/do-not-use-docker-in-docker-for-ci/` \
    --mount "type=bind,source=/var/run/docker.sock,target=/var/run/docker.sock" \
    \
    `# Because the Kurtosis initializer runs inside Docker but needs to persist & read files on the host filesystem between execution,` \
    `#  the container expects the Kurtosis directory to be bind-mounted at the special "/kurtosis" path` \
    --mount "type=bind,source=${KURTOSIS_DIRPATH},target=/kurtosis" \
    \
    `# The Kurtosis initializer image requires the volume for storing suite execution data to be mounted at the special "/suite-execution" path` \
    --mount "type=volume,source=${suite_execution_volume},target=/suite-execution" \
    \
    `# ========================= Initializer Environment Variable "Params" ============================================` \
    `# A JSON map of custom environment variable bindings that should be set when running the testsuite container` \
    --env "CUSTOM_ENV_VARS_JSON=${sanitized_custom_env_vars_json}" \
    \
    `# Test suite image that will run the user's testsuite` \
    --env "TEST_SUITE_IMAGE=${test_suite_image}" \
    \
    `# Tell the initializer the name of the volume to store data in, so it can mount it on new Docker containers it creates` \
    --env "SUITE_EXECUTION_VOLUME=${suite_execution_volume}" \
    \
    `# The initializer needs a special Kurtosis API image to operate` \
    `# The release channel here should match the release channel of the initializer itself` \
    --env "KURTOSIS_API_IMAGE=${API_IMAGE}" \
    \
    `# Extra Docker arguments that will be passed as-is to 'docker run'` \
    `# In Bash, this is how you feed arguments exactly as-is to a child script (since ${*} loses quoting and ${@} trips set -e if no arguments are passed)` \
    `# It basically says, "if and only if ${1} exists, evaluate ${@}"` \
    ${1+"${@}"} \
    \
    "${INITIALIZER_IMAGE}"
