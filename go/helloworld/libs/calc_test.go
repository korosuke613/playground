package libs

import (
	"testing" // テストで使える関数・構造体が用意されているパッケージをimport
)

func TestSumInt(t *testing.T) {
	result := SumInt(1, 2)

	if result != 3 {
		t.Errorf("Test Faild: result %v", result)
	}
}
