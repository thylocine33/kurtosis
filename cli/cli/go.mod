module github.com/kurtosis-tech/kurtosis-cli/cli

go 1.15

replace github.com/kurtosis-tech/kurtosis-cli/commons => ../commons

require (
	github.com/Masterminds/semver/v3 v3.1.1
	github.com/adrg/xdg v0.4.0
	github.com/blang/semver v3.5.1+incompatible
	github.com/denisbrodbeck/machineid v1.0.1
	github.com/docker/distribution v2.7.1+incompatible
	github.com/docker/docker v17.12.0-ce-rc1.0.20200514193020-5da88705cccc+incompatible
	github.com/go-yaml/yaml v2.1.0+incompatible
	github.com/kurtosis-tech/container-engine-lib v0.0.0-20220426170434-b6da6d148295
	github.com/kurtosis-tech/kurtosis-cli/commons v0.0.0 // Local dependency
	github.com/kurtosis-tech/kurtosis-core-api-lib/api/golang v0.0.0-20220430175905-5313094e8fd9
	github.com/kurtosis-tech/kurtosis-engine-api-lib/api/golang v0.0.0-20220430180303-956943f44286
	github.com/kurtosis-tech/kurtosis-engine-server/launcher v0.0.0-20220430180238-a47f18960e21
	github.com/kurtosis-tech/metrics-library/golang v0.0.0-20220215151652-4f1a58645739
	github.com/kurtosis-tech/object-attributes-schema-lib v0.0.0-20220225193403-74da3f3b98ce
	github.com/kurtosis-tech/stacktrace v0.0.0-20211028211901-1c67a77b5409
	github.com/manifoldco/promptui v0.9.0
	github.com/mattn/go-isatty v0.0.14
	github.com/sirupsen/logrus v1.8.1
	github.com/spf13/cobra v1.2.1
	github.com/spf13/pflag v1.0.5
	github.com/stretchr/testify v1.7.0
	golang.org/x/crypto v0.0.0-20210322153248-0c34fe9e7dc2
	golang.org/x/net v0.0.0-20210913180222-943fd674d43e // indirect
	google.golang.org/grpc v1.41.0
	google.golang.org/protobuf v1.27.1
)
