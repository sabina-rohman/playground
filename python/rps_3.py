from random import randint
def get_user_input():
    result = input('Choose rock , paper or scissor: ').upper()[0]
    return result


def get_computer_input():
    random_number = randint(1,3)
    if random_number == 1:
        return 'R'
    elif random_number == 2:
        return 'S'
    else:
        return 'P'


def get_full_word(first_letter):
    if first_letter == 'R':
        return 'ROCK'
    elif first_letter == 'S':
        return 'SCISSOR'
    elif first_letter == 'P':
        return 'PAPER'


def play_game():

    print('\n'*100)
    print('########')
    print('########')
    print('\n\n')

    user_input = get_user_input()
    computer_input = get_computer_input()
    print('YOU CHOSE ', user_input)
    print('COMPUTER CHOSE ', computer_input)

    if user_input == computer_input:
        print("IT'S A TIE")
    else:
        winner = show_result(get_full_word(user_input),get_full_word(computer_input))
        if winner == user_input:
            print('YOU WON')
        else:
            print('COMPUTER WON')


    print('########')
    print('########')
    print('\n\n')


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


def replay():
    return input('Do you want to play again? Yes or No: ').upper().startswith('Y')


def main():
    game_on = True
    while game_on:
        play_game()

        if not replay():
            break

main()