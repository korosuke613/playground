package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

func handler(w http.ResponseWriter, r *http.Request) {
	headers, _ := json.MarshalIndent(r.Header, "", "  ")
	userAgent := r.Header.Get("User-Agent")
	now := time.Now()
	fmt.Printf("%v %s: %s\n",
		now.Format(time.RFC3339),
		r.RemoteAddr,
		userAgent)

	http.SetCookie(w, &http.Cookie{
		Name:    "Futa",
		Value:   now.Format(time.RFC3339),
		Expires: now.AddDate(0, 0, 1),
	})
	w.Header().Add("Hoge", "fuga")
	w.WriteHeader(200)
	_, _ = fmt.Fprintf(w, "%s", headers)
}

func main() {
	fmt.Println("Launch echo server...")
	http.HandleFunc("/", handler)
	http.ListenAndServe(":8080", nil)
}
