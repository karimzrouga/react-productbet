import SockJS from "sockjs-client";
import Stomp from "stompjs";
let stompClient;
export default function Socket() {
   
    const socket = new SockJS("http://127.0.0.1:8080/ws");
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log("Connected " + frame);
        stompClient.subscribe("http://127.0.0.1:8080/topic", function (greeting) {
        console.log("hi" + JSON.parse(greeting.body).content);
        });
    });
    stompClient.send("http://127.0.0.1:8080/topic", {});
}
