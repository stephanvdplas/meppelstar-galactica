radio.onReceivedNumber(function (receivedNumber) {
    vijandkogel_x = receivedNumber % 5
    vijandkogel_richting = (receivedNumber - receivedNumber % 5) / 5
    vijandkogel = game.createSprite(vijandkogel_x, 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(5000 / snelheid)
        vijandkogel.change(LedSpriteProperty.Y, 1)
        vijandkogel.change(LedSpriteProperty.X, 1 - vijandkogel_richting)
        if (vijandkogel.isTouchingEdge()) {
            vijandkogel_richting = 2 - vijandkogel_richting
        }
    }
    if (vijandkogel.get(LedSpriteProperty.X) == ruimteschip.get(LedSpriteProperty.X)) {
        radio.sendString("hit")
        andergeraakt += 1
    }
})
input.onButtonPressed(Button.A, function () {
    ruimteschip.change(LedSpriteProperty.X, -1)
    richtingschip = 0
    basic.pause(500)
    richtingschip = 1
    andergeraakt = 0
    zelfgeraakt = 0
})
input.onButtonPressed(Button.AB, function () {
    jouwkogel = game.createSprite(ruimteschip.get(LedSpriteProperty.X), 3)
    richtingkogel = richtingschip
    for (let index = 0; index < 3; index++) {
        basic.pause(5000 / snelheid)
        jouwkogel.change(LedSpriteProperty.Y, -1)
        jouwkogel.change(LedSpriteProperty.X, richtingkogel - 1)
        if (jouwkogel.isTouchingEdge()) {
            richtingkogel = 2 - richtingkogel
        }
    }
    radio.sendNumber(5 * richtingkogel + jouwkogel.get(LedSpriteProperty.X))
    basic.pause(5000 / snelheid)
    jouwkogel.delete()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "hit") {
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    ruimteschip.change(LedSpriteProperty.X, 1)
    richtingschip = 2
    basic.pause(500)
    richtingschip = 1
})
let richtingkogel = 0
let jouwkogel: game.LedSprite = null
let zelfgeraakt = 0
let andergeraakt = 0
let vijandkogel: game.LedSprite = null
let vijandkogel_richting = 0
let vijandkogel_x = 0
let richtingschip = 0
let snelheid = 0
let ruimteschip: game.LedSprite = null
radio.setGroup(1)
ruimteschip = game.createSprite(2, 4)
snelheid = 10
richtingschip = 1
basic.forever(function () {
	
})
