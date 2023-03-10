input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let player: game.LedSprite = null
player = game.createSprite(2, 4)
let ball1 = game.createSprite(0, 0)
let ball2 = game.createSprite(0, 0)
let ball3 = game.createSprite(0, 0)
ball1.change(LedSpriteProperty.Brightness, -255)
ball2.change(LedSpriteProperty.Brightness, -255)
ball3.change(LedSpriteProperty.Brightness, -255)
basic.forever(function () {
    if (!(game.isGameOver())) {
        basic.pause(randint(1000, 3000))
        ball1.set(LedSpriteProperty.X, randint(0, 4))
        ball2.set(LedSpriteProperty.X, randint(0, 4))
        ball1.set(LedSpriteProperty.Brightness, 125)
        ball2.set(LedSpriteProperty.Brightness, 125)
        for (let index = 0; index < 4; index++) {
            ball1.change(LedSpriteProperty.Y, 1)
            ball2.change(LedSpriteProperty.Y, 1)
            basic.pause(200)
        }
        game.addScore(1)
        ball1.set(LedSpriteProperty.Y, 0)
        ball2.set(LedSpriteProperty.Y, 0)
    }
})
basic.forever(function () {
    if (ball1.isTouching(player)) {
        game.gameOver()
    }
    if (ball2.isTouching(player)) {
        game.gameOver()
    }
    if (ball3.isTouching(player)) {
        game.gameOver()
    }
})
basic.forever(function () {
    if (!(game.isGameOver())) {
        basic.pause(randint(1500, 2000))
        ball3.set(LedSpriteProperty.X, randint(0, 4))
        ball3.set(LedSpriteProperty.Brightness, 125)
        for (let index = 0; index < 4; index++) {
            ball3.change(LedSpriteProperty.Y, 1)
            basic.pause(randint(100, 200))
        }
        game.addScore(1)
        ball3.set(LedSpriteProperty.Y, 0)
    }
})
