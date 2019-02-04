def get_user_number_1():
    my_num_1 = int(input('Choose your first number: '))
    return my_num_1


def get_user_number_2():
    my_num_2 = int(input('Choose your second number: '))
    return my_num_2


def get_operation():
    my_operation = input('Choose your opeartion:(+,-,/,*) : ')
    return my_operation


def play_game_now():
    print('\n'*100)
    print('############')
    print('############')
    print('\n')

    user_num_1 = get_user_number_1()
    user_num_2 = get_user_number_2()
    do_operation = get_operation()
    show_result(user_num_1,user_num_2,do_operation)

    print('\n')
    print('############')
    print('############')


def show_result(user_num_1,user_num_2,do_operation):
    if do_operation == '+':
        print(user_num_1 + user_num_2)
    elif do_operation == '-':
        print(user_num_1 - user_num_2)
    elif do_operation == '/':
        print(user_num_1 / user_num_2)
    elif do_operation == '*':
        print(user_num_1 * user_num_2)


def main():
    keep_playing = True
    while keep_playing:
        play_game_now()
        print('\n\n')

        keep_playing = input('Do you want to play again? Yes or No: ').upper().startswith('Y')


main()





