def get_user_input():
    result = input('ENTER YOUR OPERATION: ')
    return result


def calculate(input):
    if '+' in input:
        input_list = input.split('+')
        return float(input_list[0]) + float(input_list[1])
    elif '-' in input:
        input_list = input.split('-')
        return float(input_list[0]) - float(input_list[1])
    elif '/' in input:
        input_list = input.split('/')
        return float(input_list[0]) / float(input_list[1])
    elif '*' in input:
        input_list = input.split('*')
        return float(input_list[0]) * float(input_list[1])


def play_game():
    print('\n'*100)
    print('#########')
    print('#########')
    print('\n\n')

    user_input = get_user_input()
    result = calculate(user_input)
    print('The answer is: ', result)

    print('\n\n')
    print('#########')
    print('#########')


def replay():
    return input('Do you want another operation? Yes or No').upper().startswith('Y')


def main():
    keep_playing = True
    while keep_playing:
        play_game()

        if not replay():
            break

main()