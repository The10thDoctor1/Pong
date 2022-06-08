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
        paddle_x -= 1
        led.plot(paddle_x, PADDLE_Y)
        led.unplot(paddle_x + PADDLE_LENGTH, PADDLE_Y)
    }
    
})
input.onButtonPressed(Button.B, function button_pressed_b() {
    
    if (paddle_x < 5 - PADDLE_LENGTH) {
        led.unplot(paddle_x, PADDLE_Y)
        led.plot(paddle_x + PADDLE_LENGTH, PADDLE_Y)
        paddle_x += 1
    }
    
})
function update() {
    
    ball_x += change_x
    ball_y += change_y
    if (ball_y == PADDLE_Y && _py.range(paddle_x, paddle_x + PADDLE_LENGTH).indexOf(ball_x) >= 0) {
        change_y *= -1
        ball_y += 2 * change_y
    } else {
        
    }
    
    //  game over
    if (ball_y == 0) {
        change_y *= -1
    }
    
}

function render() {
    basic.clearScreen()
    //  draw ball
    led.plot(ball_x, ball_y)
    //  draw paddle
    for (let i = 0; i < PADDLE_LENGTH; i++) {
        led.plot(paddle_x + i, PADDLE_Y)
    }
    basic.pause(step_duration)
}

render()
basic.forever(function loop() {
    //  input processing happens asynchronously
    update()
    render()
})
