from random import randint
def get_user_input():
    result = input('Choose Rock Paper Scissor: ').upper()[0]
    return result


def get_computer_input():
    random_input = randint(1,3)
    if random_input == 1:
        return 'R'
    elif random_input == 2:
        return 'S'
    else:
        return 'P'


def get_full_word(first_letter):
    if first_letter == 'R':
        return 'ROCK'
    elif first_letter == 'S':
        return 'SCISSOR'
    else:
        return 'PAPER'


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



def play_game():

    print('\n'*100)
    print('###########')
    print('###########')
    print('\n\n')

    user_input = get_user_input()
    computer_input = get_computer_input()
    print('You chose' , get_full_word(user_input))
    print('Computer chose' ,get_full_word(computer_input) )
    if user_input == computer_input:
        print("IT'S A TIE")
    else:
        winner = show_result(user_input,computer_input)
        if winner == user_input:
            print('YOU WON')
        else:
            print('COMPUTER WON')

    print('\n\n')
    print('#############')
    print('#############')


def replay():
    return input('Do you want to play again? Yes or No : ').upper().startswith('Y')


def main():
    game_on = True
    while game_on:
        play_game()

        if not replay():
            break

main()




