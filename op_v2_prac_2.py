def get_user_input():
    result = input('CHOOSE YOUR OPERATION: ')
    return result


def play_game():
    print('\n'*100)
    print('#########')
    print('#########')
    print('\n')


    user_input = get_user_input()
    result = calculate(user_input)
    print('Your result is ', result)

    print('\n')
    print('#########')
    print('#########')


def calculate(input):
    if '+' in input:
        input_list  = input.split('+')
        return float(input_list[0]) + float(input_list[1])
    elif '-' in input:
        input_list = input.split('-')
        return float(input_list[0]) - float(input_list[1])
    if '/' in input:
        input_list  = input.split('/')
        return float(input_list[0]) / float(input_list[1])
    elif '*' in input:
        input_list = input.split('*')
        return float(input_list[0]) * float(input_list[1])


def replay():
    return input('Do you want to play again: Yes or No ? ').upper().startswith('Y')


def main():
    game_on = True
    while game_on:
        play_game()

        if not replay():
            break

main()
