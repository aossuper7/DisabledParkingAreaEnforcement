var host = "3.25.85.102";
var port = 9001;
var mqtt;
var dicSpace = {};
dicSpace['space1'];
dicSpace['space2'];
dicSpace['space3'];
dicSpace['space4'];
var empty = 0;

function onConnect() {
    console.log("접속 성공");
    mqtt.subscribe("web/#");
}

function onFailure() {
    console.log("접속 실패");
}

function sendMsg(msg, topic) {
        message = new Paho.MQTT.Message(msg);
        message.destinationName = topic;
        mqtt.send(message);
};

function onMessageArrived(msg) {
    topic = msg.destinationName.split("/");
    message = msg.payloadString;

    if(topic[1] == "img")
        document.getElementById("enterCar").src = "data:image/jpeg;base64,"+btoa(String.fromCharCode.apply(null,msg.payloadBytes));
    else if(topic[1] == "space1") {
        spaceColor(topic[1], message);
        dicSpace['space1'] = parseInt(message);
        document.getElementById("disability").innerHTML = dicSpace['space1'] + "대";
    }
    else if(topic[1] == "space2") {
        spaceColor(topic[1], message);
        dicSpace['space2'] = parseInt(message);
    }
    else if(topic[1] == "space3") {
        spaceColor(topic[1], message);
        dicSpace['space3'] = parseInt(message);
    }
    else if(topic[1] == "space4") {
        spaceColor(topic[1], message);
        dicSpace['space4'] = parseInt(message);
    }
    for(value in dicSpace)
        empty += dicSpace[value];
    console.log(empty);

    document.getElementById('allSpace').innerHTML = empty + "대";
    empty = 0;
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