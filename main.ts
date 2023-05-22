radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.onReceivedValue(function (name, value) {
    basic.showString(name)
    basic.showString("" + (value))
})
radio.setTransmitPower(7)
radio.setGroup(191)
radio.setFrequencyBand(83)
