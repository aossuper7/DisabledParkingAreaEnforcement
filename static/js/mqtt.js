var host = "3.25.85.102";
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
    topic = msg.destinationName.split("/");
    message = msg.payloadString;

    if(topic[1] == "img")
        document.getElementById("enterCar").src = "data:image/jpeg;base64,"+btoa(String.fromCharCode.apply(null,msg.payloadBytes));
    else if(topic[1] == "space1")
        spaceColor(topic[1], message);
    else if(topic[1] == "space2")
        spaceColor(topic[1], message);
    else if(topic[1] == "space3")
        spaceColor(topic[1], message);
    else if(topic[1] == "space4")
        spaceColor(topic[1], message);
}

function spaceColor(name, value) {
    if(value == "1")
        document.getElementById(name).style.backgroundColor = "Red";
    else
        document.getElementById(name).style.backgroundColor = "Blue";
}

function MQTTConnect() {
    console.log("mqtt접속"+host+"port");
    mqtt = new Paho.MQTT.Client(host,port,"javascript_client");
    var options = {
        timeout:3,
        onSuccess:onConnect,
        onFailure:onFailure,
    };
    mqtt.onMessageArrived = onMessageArrived;
    mqtt.connect(options);
};

MQTTConnect();