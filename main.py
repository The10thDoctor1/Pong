paddle_x = 1
PADDLE_Y = 4
PADDLE_LENGTH = 3
ball_x = 2
ball_y = 2

def button_pressed_a():
    global paddle_x
    if paddle_x > 0:
        paddle_x = paddle_x - 1

def button_pressed_b():
    global paddle_x
    if paddle_x < 5 - PADDLE_LENGTH:
        paddle_x = paddle_x + 1

def loop():
    basic.clear_screen()

    led.plot(ball_x, ball_y)
    for i in range(3):
        led.plot(paddle_x + i, PADDLE_Y)

    basic.pause(200)

input.on_button_pressed(Button.A, button_pressed_a)
input.on_button_pressed(Button.B, button_pressed_b)
basic.forever(loop)
