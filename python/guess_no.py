from random import randint
def get_random_number():
    num = randint(1,3)
    return num


def get_user_number(hint):
    try:
        result = int(input('Choose a number(1-3): ' + hint + ':'))
        return result
    except:
        print('It is an invalid number dude!')


def hint_method(num):
    if num == 1:
        return 'Run'
    elif num == 2:
        return 'Shoe'
    elif num == 3:
        return 'Free'

def show_result(random_number,user_number):
    if random_number == user_number:
        print('Hooray you have won!!')
    else:
        print('Try again!The lucky number was: ' , random_number)


def play_game():
    print('\n'*100)
    print('\n\n')
    print('#########')
    print('#########')
    print('\n\n')
    random_number = get_random_number()
    hint = hint_method(random_number)
    user_number = get_user_number(hint)
    show_result(random_number,user_number)

    print('\n\n')
    print('#########')
    print('#########')
    print('\n\n')


def main():
    keep_playing = True
    while keep_playing:
        play_game()
        keep_playing = input('Do you want to play again?: Y or N: ').upper().startswith('Y')

main()