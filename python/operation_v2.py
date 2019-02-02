def get_user_input():
    my_string = input('Enter your operation: ')
    return my_string


def get_my_list(s):
    result = s.split()
    return result


def play_game():
    print('\n'*100)
    print('\n\n')
    print('########')
    print('########')
    print('\n')

    user_input = get_user_input()
    result = calculate(user_input)
    print('The answer is : ' , result)

    #my_list = get_my_list(user_input)
    #num_1 = float(my_list[0])
    #num_2 = float(my_list[2])
    #operation = my_list[1]
    #show_result(num_1, num_2, operation)

    print('\n\n')
    print('#########')
    print('#########')


#def show_result(user_num_1,user_num_2,do_operation):
 #   if do_operation == '+':
  #      print(user_num_1 + user_num_2)
   # elif do_operation == '-':
    #    print(user_num_1 / user_num_2)
    #elif do_operation == '*':
     #   print(user_num_1 * user_num_2)


def replay():
    return input('Do you want to do any more maths? Yes or No : ').upper().startswith('Y')


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
    else:
        return 'NONSENSE'




def main():
    game_on = True
    while game_on:
        play_game()

        if not replay():
            break

main()



