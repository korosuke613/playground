package main

import (
	"fmt"
	"github.com/korosuke613/playground/go/helloworld/libs"
	"os"
)

func main() {
	fmt.Println(libs.Hello())

	say, err := libs.HelloPerson("Futa")
	if err != nil {
		_, _ = fmt.Fprintf(os.Stderr, "[ERROR] %v\n", err)
		os.Exit(1)
	}
	fmt.Println(say)
}
