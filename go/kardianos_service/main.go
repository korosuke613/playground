package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	service "github.com/kardianos/service"
)

type exarvice struct {
	exit chan struct{}
}

var loggerOs service.Logger

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello, World")
}

func (e *exarvice) run() {
	http.HandleFunc("/", handler)
	http.ListenAndServe(":3000", nil)
}

func (e *exarvice) Start(s service.Service) error {
	if service.Interactive() {
		loggerOs.Info("Running in terminal.")
	} else {
		loggerOs.Info("Running under service manager.")
	}
	e.exit = make(chan struct{})

	go e.run()
	return nil
}

func (e *exarvice) Stop(s service.Service) error {
	close(e.exit)
	return nil
}

func main() {

	svcConfig := &service.Config{
		Name:        "optim_sample_agent",
		DisplayName: "OPTiM Sample Agent",
		Description: "",
	}

	// Create Exarvice service
	program := &exarvice{}
	s, err := service.New(program, svcConfig)
	if err != nil {
		log.Fatal(err)
	}

	// Setup the logger
	errs := make(chan error, 5)
	loggerOs, err = s.Logger(errs)
	if err != nil {
		log.Fatal()
	}

	if len(os.Args) > 1 {

		err = service.Control(s, os.Args[1])
		if err != nil {
			fmt.Printf("Failed (%s) : %s\n", os.Args[1], err)
			return
		}
		fmt.Printf("Succeeded (%s)\n", os.Args[1])
		return
	}

	// run in terminal
	s.Run()
}
