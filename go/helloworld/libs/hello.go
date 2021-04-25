package libs

import "fmt"

func Hello() string {
	return "Hello World!"
}

func HelloPerson(person string) (string, error) {
	if person == "" {
		return "", fmt.Errorf("person name is empty")
	}
	return fmt.Sprintf("Hello %v!", person), nil
}
