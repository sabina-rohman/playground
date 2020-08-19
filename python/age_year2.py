def get_user_input():
    result = int(input('What is your age?: '))
    return result


def get_year(age):
   year_of_birth = 2019 - age
   return year_of_birth


def play_game():
    print('\n'*100)
    print('\n\n')
    print('#########')
    print('#########')

    user_input = get_user_input()
    year = get_year(user_input)
    show_result(user_input,year)

    print('\n\n')
    print('#########')
    print('#########')


def show_result(age,year):
    if year > 2007:
        print('You are a child')
    elif year <= 2007 and year >=2003:
        print('You are a teenager')
    elif year < 2002:
        print('You are an adult')


def replay():
    return input('Do you want to play again? Yes or No : ').upper().startswith('Y')


def main():
    keep_playing = True
    while keep_playing:
        play_game()

        if not replay():
            break

main()