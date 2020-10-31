radio.onReceivedNumber(function (receivedNumber) {
    vijandkogel_x = 4 - receivedNumber % 5
    vijandkogel_richting = 2 - (receivedNumber - receivedNumber % 5) / 5
    vijandkogel = game.createSprite(vijandkogel_x, 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(5000 / snelheid)
        vijandkogel.change(LedSpriteProperty.Y, 1)
        if (vijandkogel.isTouchingEdge()) {
            vijandkogel_richting = 2 - vijandkogel_richting
        }
        vijandkogel.change(LedSpriteProperty.X, 1 - vijandkogel_richting)
    }
    if (vijandkogel.get(LedSpriteProperty.X) == ruimteschip.get(LedSpriteProperty.X)) {
        radio.sendString("hit")
        zelfgeraakt += 1
    }
    if (zelfgeraakt == max_score) {
        radio.sendString("af")
        game.gameOver()
    }
    basic.pause(200)
    vijandkogel.delete()
})
input.onButtonPressed(Button.A, function () {
    ruimteschip.change(LedSpriteProperty.X, -1)
    richtingschip = 0
    basic.pause(500)
    richtingschip = 1
})
input.onButtonPressed(Button.AB, function () {
    jouwkogel = game.createSprite(ruimteschip.get(LedSpriteProperty.X), 3)
    richtingkogel = richtingschip
    for (let index = 0; index < 3; index++) {
        basic.pause(5000 / snelheid)
        jouwkogel.change(LedSpriteProperty.Y, -1)
        if (jouwkogel.isTouchingEdge()) {
            richtingkogel = 2 - richtingkogel
        }
        jouwkogel.change(LedSpriteProperty.X, richtingkogel - 1)
    }
    radio.sendNumber(5 * richtingkogel + jouwkogel.get(LedSpriteProperty.X))
    basic.pause(5000 / snelheid)
    jouwkogel.delete()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "hit") {
        andergeraakt += 1
    } else if (receivedString == "af") {
        basic.showString("You Win!")
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
let vijandkogel: game.LedSprite = null
let vijandkogel_richting = 0
let vijandkogel_x = 0
let zelfgeraakt = 0
let richtingschip = 0
let max_score = 0
let snelheid = 0
let ruimteschip: game.LedSprite = null
radio.setGroup(1)
ruimteschip = game.createSprite(2, 4)
snelheid = 10
max_score = 3
richtingschip = 1
let andergeraakt = 0
zelfgeraakt = 0
