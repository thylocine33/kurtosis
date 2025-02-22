package kubernetes_label_key

import (
	"github.com/stretchr/testify/require"
	"strings"
	"testing"
)

var testLabelsWithValidity = map[string]bool{
	"":                        false,
	" ":                       false, // whitespace not allowed
	"a":                       true,
	"aaa":                     true,
	"aAa":                     true, // caps allowed
	"a99a9":                   true,
	"a.7.3.5":                 true,
	"kurtosistech.com/app-id": true,
	"foo_blah":                true,
}

func TestEdgeCaseLabels(t *testing.T) {
	for label, shouldPass := range testLabelsWithValidity {
		_, err := CreateNewKubernetesLabelKey(label)
		didPass := err == nil
		require.Equal(t, shouldPass, didPass, "Expected label key string '%v' validity to be '%v' but was '%v'", label, shouldPass, didPass)
	}
}

func TestTooLongLabel(t *testing.T) {
	invalidLabel := strings.Repeat("a", 9999)
	_, err := CreateNewKubernetesLabelKey(invalidLabel)
	require.Error(t, err)
}
