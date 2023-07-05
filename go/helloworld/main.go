package main

import (
	"fmt"
	"os"

	"github.com/hashicorp/terraform-plugin-sdk/v2/terraform"
	"github.com/korosuke613/playground/go/helloworld/libs"
)

func main() {
	fmt.Println(libs.Hello())

	say, err := libs.HelloPerson("Futa")
	if err != nil {
		_, _ = fmt.Fprintf(os.Stderr, "[ERROR] %v\n", err)
		return
	}
	fmt.Println(say)

	terraform.NewInstanceDiff()
}
