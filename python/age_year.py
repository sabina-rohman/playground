
def get_user_age():
    player_age = int(input('What is your age : '))
    return player_age


def get_year_user(num):
     year_of_birth = 2019 - num
     return year_of_birth


def play_game():
    print('\n'*100)
    print('\n\n')
    print('**************')
    print('**************')
    print('\n')


    user_age = get_user_age()
    year_user = get_year_user(user_age)
    show_result(user_age,year_user)

    print('\n')
    print('**************')
    print('**************')


def show_result(user_age,year_user):
    if year_user > 2006:
        print('You are a child.Your year of birth is : ' , year_user)
    elif year_user <= 2006 and year_user > 2000:
        print('You are a teenager. Your year of birth is : ',year_user)
    elif year_user <= 2000:
        print('You are an adult.Your year of birth is : ' , year_user)


def main():
     keep_playing = True
     while keep_playing:
         play_game()
         print('\n\n')
         keep_playing = input('Do you want to check again? Enter yes or no : ').lower().startswith('y')


main()






