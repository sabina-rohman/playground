def get_age():
    result = int(input('Enter your age: '))
    return result


def get_year(num):
    birth_year = 2019 - num
    return birth_year


def play_game():
    print('\n'*100)
    print('\n\n')
    print('########')
    print('########')
    age = get_age()
    birth_year = get_year(age)
    show_result(age,birth_year)
    print('\n\n')
    print('########')
    print('########')


def show_result(age,birth_year):
    if birth_year > 2006:
        print('You are a child. Your year of birth is ',birth_year)
    elif birth_year <=2006 and birth_year >=2002:
        print('You are a teenager.Your year of birth is ',birth_year)
    elif birth_year <= 2001:
        print('You are an adult. Your year of birth is ',birth_year)


def replay():
    return input('Do you want to check again? Y or N ').upper().startswith('Y')


def main():
    keep_playing = True
    while keep_playing:
        play_game()

        if not replay():
            break

main()
