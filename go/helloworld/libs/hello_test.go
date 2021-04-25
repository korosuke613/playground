package libs

import (
	"testing" // テストで使える関数・構造体が用意されているパッケージをimport
)

func TestHello(t *testing.T) {
	result := Hello()

	if result != "Hello World!" {
		t.Errorf("Test Faild: result %v", result)
	}
}

func TestHelloPerson(t *testing.T) {
	var tests = []struct {
		input    string
		expected string
		isError  bool
	}{
		{"John", "Hello John!", false},
		{"", "", true},
	}

	for _, test := range tests {
		output, err := HelloPerson(test.input)

		if !test.isError && err != nil {
			t.Errorf("Test Failed with error: input %v, error %v", test.input, err)
		}

		if output != test.expected {
			t.Errorf("Test Failed: input %v, got %v, want %v", test.input, output, test.expected)
		}
	}

}
