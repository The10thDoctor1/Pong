let paddle_x = 1
let PADDLE_Y = 4
let PADDLE_LENGTH = 2
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
function update() {
    
    ball_x += change_x
    ball_y += change_y
    if (ball_y == 0) {
        change_y = 1
    }
    
    //  bouncing ball by 2 long paddle
    if (ball_y == 3 && PADDLE_LENGTH == 2) {
        if (ball_x == 0 && led.point(0, 4)) {
            change_y = -1
        } else if (ball_y == 3 && PADDLE_LENGTH == 2) {
            if (ball_x == 1 && led.point(1, 4)) {
                change_y = -1
            } else if (ball_y == 3 && PADDLE_LENGTH == 2) {
                if (ball_x == 2 && led.point(2, 4)) {
                    change_y = -1
                } else if (ball_y == 3 && PADDLE_LENGTH == 2) {
                    if (ball_x == 3 && led.point(3, 4)) {
                        change_y = -1
                    } else if (ball_y == 3 && PADDLE_LENGTH == 2) {
                        if (ball_x == 4 && led.point(4, 4)) {
                            change_y = -1
                        }
                        
                    }
                    
                }
                
            }
            
        }
        
    }
    
    //  bouncing ball by 3 long paddle
    if (ball_y == 3 && PADDLE_LENGTH == 3) {
        if (ball_x == 0 && led.point(0, 4)) {
            change_y = -1
        } else if (ball_y == 3 && PADDLE_LENGTH == 3) {
            if (ball_x == 1 && led.point(1, 4)) {
                change_y = -1
            } else if (ball_y == 3 && PADDLE_LENGTH == 3) {
                if (ball_x == 2 && led.point(2, 4)) {
                    change_y = -1
                } else if (ball_y == 3 && PADDLE_LENGTH == 3) {
                    if (ball_x == 3 && led.point(3, 4)) {
                        change_y = -1
                    } else if (ball_y == 3 && PADDLE_LENGTH == 3) {
                        if (ball_x == 4 && led.point(4, 4)) {
                            change_y = -1
                        }
                        
                    }
                    
                }
                
            }
            
        }
        
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
