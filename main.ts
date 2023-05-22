radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.onReceivedValue(function (name, value) {
    basic.showString("" + (makerbit.getUltrasonicDistance(DistanceUnit.CM)))
    basic.showNumber(value)
})
radio.setGroup(107)
makerbit.connectUltrasonicDistanceSensor(DigitalPin.P5, DigitalPin.P8)
