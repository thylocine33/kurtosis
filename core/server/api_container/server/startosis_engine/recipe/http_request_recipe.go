package recipe

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/itchyny/gojq"
	"github.com/kurtosis-tech/kurtosis/container-engine-lib/lib/backend_interface/objects/service"
	"github.com/kurtosis-tech/kurtosis/core/server/api_container/server/service_network"
	"github.com/kurtosis-tech/kurtosis/core/server/api_container/server/startosis_engine/kurtosis_instruction/shared_helpers/magic_string_helper"
	"github.com/kurtosis-tech/stacktrace"
	"github.com/sirupsen/logrus"
	"go.starlark.net/starlark"
	"io"
	"net/http"
	"time"
)

const (
	postMethod        = "POST"
	getMethod         = "GET"
	emptyBody         = ""
	unusedContentType = ""

	statusCodeKey = "code"
	bodyKey       = "body"
)

var backoffSchedule = []time.Duration{
	1 * time.Second,
	3 * time.Second,
	10 * time.Second,
}

type HttpRequestRecipe struct {
	serviceId   service.ServiceID
	portId      string
	contentType string
	endpoint    string
	method      string
	body        string
	extractors  map[string]string
}

func NewPostHttpRequestRecipe(serviceId service.ServiceID, portId string, contentType string, endpoint string, body string, extractors map[string]string) *HttpRequestRecipe {
	return &HttpRequestRecipe{
		serviceId:   serviceId,
		portId:      portId,
		method:      postMethod,
		contentType: contentType,
		endpoint:    endpoint,
		body:        body,
		extractors:  extractors,
	}
}

func NewGetHttpRequestRecipe(serviceId service.ServiceID, portId string, endpoint string, extractors map[string]string) *HttpRequestRecipe {
	return &HttpRequestRecipe{
		serviceId:   serviceId,
		portId:      portId,
		method:      getMethod,
		contentType: unusedContentType,
		endpoint:    endpoint,
		body:        emptyBody,
		extractors:  extractors,
	}
}

func (recipe *HttpRequestRecipe) Execute(ctx context.Context, serviceNetwork service_network.ServiceNetwork) (map[string]starlark.Comparable, error) {
	var response *http.Response
	var err error
	for _, backoff := range backoffSchedule {
		logrus.Debugf("Running HTTP request recipe '%v'", recipe)
		response, err = serviceNetwork.HttpRequestService(
			ctx,
			recipe.serviceId,
			recipe.portId,
			recipe.method,
			recipe.contentType,
			recipe.endpoint,
			recipe.body,
		)
		if err == nil {
			break
		}
		logrus.Debugf("Running HTTP request recipe failed with error %v", err)
		time.Sleep(backoff)
	}
	if err != nil {
		return nil, stacktrace.Propagate(err, "An error occurred when running HTTP request recipe")
	}
	defer func() {
		err := response.Body.Close()
		if err != nil {
			logrus.Errorf("An error occurred when closing response body: %v", err)
		}
	}()
	body, err := io.ReadAll(response.Body)
	logrus.Debugf("Got response '%v'", string(body))
	if err != nil {
		return nil, stacktrace.Propagate(err, "An error occurred while reading HTTP response body")
	}
	resultDict := map[string]starlark.Comparable{
		bodyKey:       starlark.String(body),
		statusCodeKey: starlark.MakeInt(response.StatusCode),
	}
	extractDict, err := recipe.extract(body)
	if err != nil {
		return nil, stacktrace.Propagate(err, "An error occurred while running extractors on HTTP response body")
	}
	for extractorKey, extractorValue := range extractDict {
		resultDict[extractorKey] = extractorValue
	}
	return resultDict, nil
}

func (recipe *HttpRequestRecipe) extract(body []byte) (map[string]starlark.Comparable, error) {
	if len(recipe.extractors) == 0 {
		return map[string]starlark.Comparable{}, nil
	}
	logrus.Debug("Executing extract recipe")
	var jsonBody interface{}
	err := json.Unmarshal(body, &jsonBody)
	if err != nil {
		return nil, stacktrace.Propagate(err, "An error occurred when parsing JSON response body")
	}
	extractorResult := map[string]starlark.Comparable{}
	for extractorKey, extractor := range recipe.extractors {
		logrus.Debugf("Running against '%v' '%v'", jsonBody, extractor)
		query, err := gojq.Parse(extractor)
		if err != nil {
			return nil, stacktrace.Propagate(err, "An error occurred when parsing field extractor '%v'", extractor)
		}
		iter := query.Run(jsonBody)
		foundMatch := false
		for {
			matchValue, ok := iter.Next()
			if !ok {
				break
			}
			if err, ok := matchValue.(error); ok {
				logrus.Errorf("%v", err)
			}
			if matchValue != nil {
				var parsedMatchValue starlark.Comparable
				logrus.Debug("Start parsing...")
				switch value := matchValue.(type) {
				case int:
					parsedMatchValue = starlark.MakeInt(value)
				case string:
					parsedMatchValue = starlark.String(value)
				case float32:
					parsedMatchValue = starlark.Float(value)
				case float64:
					parsedMatchValue = starlark.Float(value)
				default:
					parsedMatchValue = starlark.String(fmt.Sprintf("%v", value))
				}
				logrus.Debugf("Parsed successfully %v %v", matchValue, parsedMatchValue)
				extractorResult[extractorKey] = parsedMatchValue
				foundMatch = true
				break
			}
		}
		if !foundMatch {
			return nil, stacktrace.NewError("No field '%v' was found on input '%v'", extractor, body)
		}
	}
	logrus.Debugf("Extractor result map '%v'", extractorResult)
	return extractorResult, nil
}

func (recipe *HttpRequestRecipe) CreateStarlarkReturnValue(resultUuid string) *starlark.Dict {
	dict := &starlark.Dict{}
	_ = dict.SetKey(starlark.String(bodyKey), starlark.String(fmt.Sprintf(magic_string_helper.RuntimeValueReplacementPlaceholderFormat, resultUuid, bodyKey)))
	_ = dict.SetKey(starlark.String(statusCodeKey), starlark.String(fmt.Sprintf(magic_string_helper.RuntimeValueReplacementPlaceholderFormat, resultUuid, statusCodeKey)))
	for extractorKey := range recipe.extractors {
		_ = dict.SetKey(starlark.String(extractorKey), starlark.String(fmt.Sprintf(magic_string_helper.RuntimeValueReplacementPlaceholderFormat, resultUuid, extractorKey)))
	}
	dict.Freeze()
	return dict
}
