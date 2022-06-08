var host = "3.25.85.102"
var port = 9001;
var mqtt;

function onConnect() {
    console.log("접속 성공");
    mqtt.subscribe("web/#");
}

function onFailure() {
    console.log("접속 실패");
}

function onMessageArrived(msg) {
    message = msg.destinationName.split("/");
    if(message[1] == "img") {
        document.getElementById("enterCar").src = "data:image/jpeg;base64,"+btoa(String.fromCharCode.apply(null,msg.payloadBytes));
    }
}

function MQTTConnect() {
    console.log("mqtt접속"+host+"port");
    mqtt = new Paho.MQTT.Clinet(host,port,"web");
    var options = {
        timeout:3,
        onSuccess:onConnect,
        onFailure:onFailure,
    }
    mqtt.onMessageArrived = onMessageArrived;
    mqtt.connect(options);
}

MQTTConnect();