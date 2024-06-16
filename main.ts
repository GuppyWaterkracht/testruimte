input.onButtonPressed(Button.A, function () {
    graden += 1
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("gestolen")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "VL") {
        maqueen.servoRun(maqueen.Servos.S1, 71)
    } else if (receivedString == "VH") {
        maqueen.servoRun(maqueen.Servos.S1, 0)
    } else if (receivedString == "stop") {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
input.onButtonPressed(Button.B, function () {
    graden += -1
})
radio.onReceivedValue(function (name, value) {
    if (name == "Y" && value > 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, value / 2)
    }
    if (name == "Y" && value < 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, value / -2)
    }
    if (name == "X" && value > 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, value / 2)
    }
    if (name == "X" && value > 0) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, value / -2)
    }
})
let graden = 0
let value = 0
basic.forever(function () {
    basic.showNumber(graden)
})
