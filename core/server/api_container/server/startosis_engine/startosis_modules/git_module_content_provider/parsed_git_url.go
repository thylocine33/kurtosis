package git_module_content_provider

import (
	"fmt"
	"github.com/kurtosis-tech/stacktrace"
	"net/url"
	"path"
	"strings"
)

const (
	githubDomain           = "github.com"
	httpsSchema            = "https"
	startosisFileExtension = ".star"
	urlPathSeparator       = "/"
)

// ParsedGitURL an object representing a parsed moduleURL
type ParsedGitURL struct {
	// moduleAuthor the git of the module (GitHub user or org)
	moduleAuthor string
	// moduleName the name of the module
	moduleName string
	// gitURL the url ending with `.git` where the module lives
	gitURL string
	// relativeRepoPath the relative path to the repo this would be moduleAuthor/moduleName/
	relativeRepoPath string
	// relativeFilePath the full path of the file relative to the module store relativeRepoPath/path/to/file.star
	relativeFilePath string
}

func newParsedGitURL(moduleAuthor, moduleName, gitURL, relativeRepoPath, relativeFilePath string) *ParsedGitURL {
	return &ParsedGitURL{
		moduleAuthor:     moduleAuthor,
		moduleName:       moduleName,
		gitURL:           gitURL,
		relativeRepoPath: relativeRepoPath,
		relativeFilePath: relativeFilePath,
	}
}

// parseGitURL this takes a Git url (GitHub) for now and converts it into the struct ParsedGitURL
// This can in the future be extended to GitLab or BitBucket or any other Git Host
func parseGitURL(packageURL string) (*ParsedGitURL, error) {
	// we expect something like github.com/author/module/path.star
	// we don't want schemas
	parsedURL, err := url.Parse(packageURL)
	if err != nil {
		return nil, stacktrace.Propagate(err, "Error parsing the url '%v'", packageURL)
	}
	if parsedURL.Scheme != "" {
		return nil, stacktrace.NewError("Expected schema to be empty got '%v'", parsedURL.Scheme)
	}

	// we prefix schema and make sure that the URL still parses
	packageURLPrefixedWithHttps := httpsSchema + "://" + packageURL
	parsedURL, err = url.Parse(packageURLPrefixedWithHttps)
	if err != nil {
		return nil, stacktrace.Propagate(err, "Error parsing the url '%v'", packageURL)
	}
	if parsedURL.Host != githubDomain {
		return nil, stacktrace.NewError("We only support modules on Github for now but got '%v'", packageURL)
	}

	splitURLPath := cleanPathAndSplit(parsedURL.Path)

	if len(splitURLPath) < 3 {
		return nil, stacktrace.NewError("URL '%v' path should contain at least 3 subpaths got '%v'", packageURL, splitURLPath)
	}

	moduleAuthor := splitURLPath[0]
	moduleName := splitURLPath[1]
	gitURL := fmt.Sprintf("%v://%v/%v/%v.git", httpsSchema, githubDomain, moduleAuthor, moduleName)
	relativeModulePath := path.Join(moduleAuthor, moduleName)
	relativeFilePath := path.Join(splitURLPath...)

	parsedGitURL := newParsedGitURL(
		moduleAuthor,
		moduleName,
		gitURL,
		relativeModulePath,
		relativeFilePath,
	)

	return parsedGitURL, nil
}

// TODO Add Tests
func parseModuleId(moduleId string) (*ParsedGitURL, error) {
	parsedURL, err := url.Parse(moduleId)
	if err != nil {
		return nil, stacktrace.Propagate(err, "Error parsing the moduleId '%v'", moduleId)
	}
	if parsedURL.Scheme != "" {
		return nil, stacktrace.NewError("Expected schema to be empty got '%v'", parsedURL.Scheme)
	}

	// we prefix schema and make sure that the URL still parses
	packageURLPrefixedWithHttps := httpsSchema + "://" + moduleId
	parsedURL, err = url.Parse(packageURLPrefixedWithHttps)
	if err != nil {
		return nil, stacktrace.Propagate(err, "Error parsing the url '%v'", moduleId)
	}
	if parsedURL.Host != githubDomain {
		return nil, stacktrace.NewError("We only support modules on Github for now but got '%v'", moduleId)
	}

	splitURLPath := cleanPathAndSplit(parsedURL.Path)

	if len(splitURLPath) != 2 {
		return nil, stacktrace.NewError("URL '%v' moduleId should contain exactly 2 subpaths got '%v'", moduleId, splitURLPath)
	}

	moduleAuthor := splitURLPath[0]
	moduleName := splitURLPath[1]
	gitURL := fmt.Sprintf("%v://%v/%v/%v.git", httpsSchema, githubDomain, moduleAuthor, moduleName)
	relativeModulePath := path.Join(moduleAuthor, moduleName)

	parsedGitURL := newParsedGitURL(
		moduleAuthor,
		moduleName,
		gitURL,
		relativeModulePath,
		"",
	)

	return parsedGitURL, nil
}

// cleanPath removes empty "" from the string slice
func cleanPathAndSplit(urlPath string) []string {
	cleanPath := path.Clean(urlPath)
	splitPath := strings.Split(cleanPath, urlPathSeparator)
	var sliceWithoutEmptyStrings []string
	for _, subPath := range splitPath {
		if subPath != "" {
			sliceWithoutEmptyStrings = append(sliceWithoutEmptyStrings, subPath)
		}
	}
	return sliceWithoutEmptyStrings
}
