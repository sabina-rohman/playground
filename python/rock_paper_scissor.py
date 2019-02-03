from random import randint
def get_user_input():
    return input('ROCK , PAPER , SCISSOR: Choose--> ').upper()[0]


def get_computer_input():
    random_input = randint(1,3)
    if random_input == 1:
        return 'R'
    if random_input == 2:
        return 'P'
    if random_input == 3:
        return 'S'


def show_result(user1,user2):

    if user1 == 'R':
        if user2 == 'P':
            return user2
        else:
            return user1
    elif user1 == 'P':
        if user2 == 'S':
            return user2
        else:
            return user1
    elif user1 == 'S':
        if user2 == 'R':
            return user2
        else:
            return user1


def get_full_word(first_letter):
    if first_letter == 'R':
        return 'ROCK'
    if first_letter == 'P':
        return 'PAPER'
    if first_letter == 'S':
        return 'SCISSOR'


def play_game():
    print('\n'*100)
    print('\n\n')
    print('*********')
    print('*********')

    user_input = get_user_input()
    computer_input = get_computer_input()
    print('YOU CHOSE ',get_full_word(user_input))
    print('COMPUTER CHOSE ',get_full_word(computer_input))
    if user_input == computer_input:
        print("IT'S A TIE")
    else:
        winner = show_result(user_input,computer_input)
        if winner == user_input:
            print('YOU HAVE WON')
        else:
            print('COMPUTER HAS WON')

    print('\n\n')
    print('**********')
    print('**********')


def replay():
    return input('Do you want to play again? Yes or No: ').upper().startswith('Y')


def main():
    game_on = True
    while game_on:
        play_game()
        if not replay():
            break


main()
