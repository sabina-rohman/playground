def get_user_input():
    result = input('Choose your operation : ')
    return result


def play_game():
    print('\n'*100)
    print('\n\n')
    print('#########')
    print('#########')
    print('\n\n')

    user_input = get_user_input()
    result = calculate(user_input)
    print('The answer is: ',result)

    print('\n\n')
    print('########')
    print('########')


def calculate(input):
    if '+' in input:
        input_list = input.split('+')
        return float(input_list[0]) +float(input_list[2])

    elif '-' in input:
        input_list = input.split('+')
        return float(input_list[0]) + float(input_list[2])

    elif '/' in input:
        input_list = input.split('/')
        return float(input_list[0]) / float(input_list[2])
    elif '*' in input:
        input_list = input.split('*')
        return float(input_list[0]) * float(input_list[2])
    else:
        return 'NONSENSE'


def replay():
    return input('Do you want to play again? Yes or No: ').upper().startswith('Y')


def main():
    keep_playing = True
    while keep_playing:
        play_game()

        if not replay():
            break






