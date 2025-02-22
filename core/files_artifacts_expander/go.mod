module github.com/kurtosis-tech/kurtosis/core/files_artifacts_expander

go 1.19

replace (
	github.com/kurtosis-tech/kurtosis/api/golang => ../../api/golang
	github.com/kurtosis-tech/kurtosis/contexts-config-store => ../../contexts-config-store
	github.com/kurtosis-tech/kurtosis/grpc-file-transfer/golang => ../../grpc-file-transfer/golang
)

require (
	github.com/gammazero/workerpool v1.1.2
	github.com/kurtosis-tech/kurtosis/api/golang v0.0.0 // Local dependency
	github.com/kurtosis-tech/kurtosis/grpc-file-transfer/golang v0.0.0 // Local dependency
	github.com/kurtosis-tech/stacktrace v0.0.0-20211028211901-1c67a77b5409
	github.com/sirupsen/logrus v1.8.1
	google.golang.org/grpc v1.41.0
)

require (
	github.com/gammazero/deque v0.1.0 // indirect
	github.com/golang/protobuf v1.5.3 // indirect
	golang.org/x/net v0.8.0 // indirect
	golang.org/x/sys v0.6.0 // indirect
	golang.org/x/text v0.8.0 // indirect
	google.golang.org/genproto v0.0.0-20210602131652-f16073e35f0c // indirect
	google.golang.org/protobuf v1.29.1 // indirect
)
