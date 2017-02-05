package main

import "net/http"

type Channel struct {
	Id   string `json:"id"`
	Name string `json:"name"`
}

func main() {
	router := NewRouter()

	router.Handle("channel add", addChannel)

	http.Handle("/", router)
	http.ListenAndServe(":4000", nil)
}

/* hot to test:
jsbin.com

let ws = new WebSocket('ws://localhost:4000');
let message = {
  name: 'channel add',
  data: {
    name: 'Hardware Support',
  }
};

ws.onopen = () => {
  ws.send(JSON.stringify(message));
}

ws.onmessage = (e) => {
  console.log(JSON.parse(e.data));
}

*/
