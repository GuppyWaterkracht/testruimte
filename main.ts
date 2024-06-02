input.onButtonPressed(Button.A, function () {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
})
input.onButtonPressed(Button.B, function () {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
})
maqueen.servoRun(maqueen.Servos.S1, 0)
basic.forever(function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    basic.pause(1000)
    maqueen.servoRun(maqueen.Servos.S1, 0)
    basic.pause(1000)
    maqueen.servoRun(maqueen.Servos.S1, 180)
})
basic.forever(function () {
    music.setVolume(pins.analogReadPin(AnalogPin.P1))
})
