let paddle_x = 1
let PADDLE_Y = 4
let PADDLE_LENGTH = 3
let ball_x = 2
let ball_y = 2
input.onButtonPressed(Button.A, function button_pressed_a() {
    
    if (paddle_x > 0) {
        paddle_x = paddle_x - 1
    }
    
})
input.onButtonPressed(Button.B, function button_pressed_b() {
    
    if (paddle_x < 5 - PADDLE_LENGTH) {
        paddle_x = paddle_x + 1
    }
    
})
basic.forever(function loop() {
    basic.clearScreen()
    led.plot(ball_x, ball_y)
    for (let i = 0; i < 3; i++) {
        led.plot(paddle_x + i, PADDLE_Y)
    }
    basic.pause(200)
})
