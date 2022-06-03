let paddle_x = 1
let PADDLE_Y = 4
let PADDLE_LENGTH = 3
let ball_x = 2
let ball_y = 2
let change_x = 0
let change_y = -1
let step_duration = 500
//  game speed
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
function render() {
    basic.clearScreen()
    led.plot(ball_x, ball_y)
    for (let i = 0; i < 3; i++) {
        led.plot(paddle_x + i, PADDLE_Y)
    }
    basic.pause(step_duration)
}

render()
basic.forever(function loop() {
    
    //  input processing happens asynchronously
    //  update
    ball_x = ball_x + change_x
    ball_y = ball_y + change_y
    render()
})
