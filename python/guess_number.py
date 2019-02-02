from random import randint


def get_random_num():
    my_num = randint(1, 3)
    return my_num

def hint_method(num):
    if num == 1:
        return 'HINT : run'
    elif num == 2:
        return 'HINT : shoe'
    elif num == 3:
        return 'HINT : free'
    else:
        return 'NO HINT'

def get_player_input(hint):
    result = int(input('Guess a random number (1 to 3) :   ' + hint  + ':'))
    return result



def play_game():
    print('\n' * 100)
    print('\n\n')
    print('################################################')
    print('################################################')
    print('\n')

    random_number = get_random_num()
    hint = hint_method(random_number)
    user_number = get_player_input(hint)
    show_result(random_number,user_number)

    print('\n')
    print('################################################')
    print('################################################')


def show_result(random_number,user_number):
    if random_number ==  user_number :
        print('Hooray!!, you won :) :)')
    else:
        print('Try again. The lucky number was: ', random_number)




def main():
    keep_playing = True

    while keep_playing:
        play_game()
        print('\n\n')
        keep_playing = input('Do you want to play again? Y OR N : ').upper().startswith('Y')



main()


