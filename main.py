paddle_x = 1
PADDLE_Y = 4
PADDLE_LENGTH = 3
ball_x = 2
ball_y = 2
change_x = 0
change_y = -1
step_duration = 500 # game speed


def button_pressed_a():
    global paddle_x
    if paddle_x > 0:
        paddle_x = paddle_x - 1
input.on_button_pressed(Button.A, button_pressed_a)


def button_pressed_b():
    global paddle_x
    if paddle_x < 5 - PADDLE_LENGTH:
        paddle_x = paddle_x + 1
input.on_button_pressed(Button.B, button_pressed_b)


def render():
    basic.clear_screen()

    led.plot(ball_x, ball_y)
    for i in range(3):
        led.plot(paddle_x + i, PADDLE_Y)
          
    basic.pause(step_duration)


def loop():
    global ball_x, ball_y

    # input processing happens asynchronously

    # update
    ball_x = ball_x + change_x
    ball_y = ball_y + change_y

    render() 


render()
basic.forever(loop)
