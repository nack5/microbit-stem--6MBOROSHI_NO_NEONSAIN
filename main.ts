led.enable(false)
pins.analogWritePin(AnalogPin.P0, 1023)
pins.analogWritePin(AnalogPin.P2, 1023)
pins.analogWritePin(AnalogPin.P1, 1023)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, 0)
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 0)
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.P2, 1023)
    for (let index = 0; index < 1; index++) {
        for (let Val = 0; Val <= 513; Val++) {
            pins.analogWritePin(AnalogPin.P0, Val)
            pins.analogWritePin(AnalogPin.P1, 1023 - Val)
            pins.analogWritePin(AnalogPin.P2, 512 - Val)
            basic.pause(1)
        }
        for (let Val = 0; Val <= 513; Val++) {
            pins.analogWritePin(AnalogPin.P0, 512 - Val)
            pins.analogWritePin(AnalogPin.P1, 1023 - Val)
            pins.analogWritePin(AnalogPin.P2, Val)
            basic.pause(1)
        }
    }
    pins.analogWritePin(AnalogPin.P2, 1023)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P0, 1023)
})
