from random import randint
def get_user_input():
    result = input('Choose ---> Rock, Paper ,Scissor: ').upper()[0]
    return result


def get_computer_input():
    num = randint(1,3)
    if num == 1:
        return 'R'
    elif num == 2:
        return 'P'
    elif num == 3:
        return 'S'

def get_full_word(first_letter):
    if first_letter == 'R':
        return 'Rock'
    elif first_letter == 'P':
        return 'Paper'
    elif first_letter == 'S':
        return 'Scissor'


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
    print('\n\n')
    print('#########')
    print('#########')
    print('\n\n')
    print('\n\n')

    user_input = get_user_input()
    computer_input  = get_computer_input()
    print('You chose' , get_full_word(user_input))
    print('Computer chose' , get_full_word(computer_input))
    if user_input == computer_input:
        print("It's a tie")
    else:
        winner = show_result(user_input,computer_input)
        if winner == user_input:
            print('You have won')
        else:
            print('Computer has won')


def replay():
    return input('Do you want to play again? Y or N: ').upper().startswith('Y')


def main():
    keep_playing = True
    while keep_playing:
        play_game()

        if not replay():
            break

main()

