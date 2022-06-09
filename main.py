paddle_x = 1
PADDLE_Y = 4
PADDLE_LENGTH = 2
ball_x = 2
ball_y = 0
change_x = -1
change_y = 1
step_duration = 500 # game speed


def button_pressed_a():
    global paddle_x
    if paddle_x > 0:
        paddle_x -= 1
        led.plot(paddle_x, PADDLE_Y)
        led.unplot(paddle_x + PADDLE_LENGTH, PADDLE_Y)
input.on_button_pressed(Button.A, button_pressed_a)


def button_pressed_b():
    global paddle_x
    if paddle_x < 5 - PADDLE_LENGTH:
        led.unplot(paddle_x, PADDLE_Y)
        led.plot(paddle_x + PADDLE_LENGTH, PADDLE_Y)
        paddle_x += 1
input.on_button_pressed(Button.B, button_pressed_b)


def update():
    global ball_x, ball_y, change_x, change_y

    ball_x += change_x
    ball_y += change_y

    # bounce off paddle
    if ball_y == PADDLE_Y and ball_x in range(paddle_x, paddle_x + PADDLE_LENGTH):
        change_y *= -1
        ball_y += 2 * change_y

    if ball_y == 5:
        game.game_over()

    # bounce off top wall
    if ball_y == 0:
        change_y *= -1
    # bounce off side walls
    if ball_x == 0 or ball_x == 4:
        change_x *= -1


def render():
    basic.clear_screen()

    # draw ball
    led.plot(ball_x, ball_y)
    # draw paddle
    for i in range(PADDLE_LENGTH):
        led.plot(paddle_x + i, PADDLE_Y)
          
    basic.pause(step_duration)


def loop():
    # input processing happens asynchronously
    update()
    render() 


render()
basic.forever(loop)