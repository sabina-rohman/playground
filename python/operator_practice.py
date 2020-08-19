def get_first_number():
    mynum = int(input('Enter your first number: '))
    return mynum


def get_second_number():
    mynum2 = int(input('Enter the second number: '))
    return mynum2


def get_operation():
    my_operation = input('Choose an operation(+,-,/,*): ')
    return my_operation


def play_game():
    print('\n'*100)
    print('###########')
    print('###########')
    first_number = get_first_number()
    second_number = get_second_number()
    operation = get_operation()
    show_result(first_number,second_number,operation)
    print('\n\n')
    print('\n\n')


def show_result(first_number,second_number,operation):
    if operation == '+':
        print(first_number + second_number)
    elif operation == '-':
        print(first_number + second_number)
    elif operation == '*':
        print(first_number * second_number)
    elif operation == '/':
        print(first_number / second_number)

def replay():
    return input('Do you want to play again?: Y or N: ').upper().startswith('Y')


def main():
    keep_playing = True
    while keep_playing:
        play_game()

        if not replay():
            break


main()
