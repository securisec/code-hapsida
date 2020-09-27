package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

type Test struct {
	Some string `json:"some"`
	Yaml int64  `yaml:"yaml"`
}

const (
	number  = 99
	boolean = true
	str     = "some string"
)

func main() {

	if str == "test string" {
		panic(123)
	} else {
		for _, i := range []string{"some"} {
			fmt.Println(i)
		}
	}

	url := "https://httpbin.org/get"
	req, _ := http.NewRequest("GET", url, nil)
	res, err := http.DefaultClient.Do(req)

	if err != nil {
		panic(err)
	}

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
