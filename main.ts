radio.onReceivedNumber(function (receivedNumber) {
    vijandkogel_x = receivedNumber
    vijandkogel = game.createSprite(vijandkogel_x, 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        vijandkogel.change(LedSpriteProperty.Y, 1)
    }
    if (vijandkogel.get(LedSpriteProperty.X) == ruimteschip.get(LedSpriteProperty.X)) {
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
})
input.onButtonPressed(Button.AB, function () {
    jouwkogel = game.createSprite(ruimteschip.get(LedSpriteProperty.X), 3)
    for (let index = 0; index < 3; index++) {
        basic.pause(500)
        jouwkogel.change(LedSpriteProperty.Y, -1)
    }
    radio.sendNumber(jouwkogel.get(LedSpriteProperty.X))
    basic.pause(500)
    jouwkogel.delete()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "af") {
        basic.showString("You Win!")
    }
})
input.onButtonPressed(Button.B, function () {
    ruimteschip.change(LedSpriteProperty.X, 1)
})
let jouwkogel: game.LedSprite = null
let vijandkogel: game.LedSprite = null
let vijandkogel_x = 0
let zelfgeraakt = 0
let max_score = 0
let ruimteschip: game.LedSprite = null
radio.setGroup(1)
ruimteschip = game.createSprite(2, 4)
max_score = 3
let richtingschip = 1
let andergeraakt = 0
zelfgeraakt = 0
