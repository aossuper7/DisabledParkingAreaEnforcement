function moterUpDown(msg, topic) {
    sendMsg(msg, topic);
    pushNotify("success","바리게이트 제어","바리게이트 올리기 완료", true);
}
