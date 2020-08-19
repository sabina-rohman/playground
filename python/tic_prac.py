from random import randint
def display_board(board):
    print('\n'*100)
    print('  |   | ')
    print(board[7] + ' | ' + board[8] + ' | ' + board[9] )
    print('-----------')
    print('  |   | ')
    print('-----------')
    print(board[4] + ' | ' + board[5] + ' | ' + board[6])
    
    print(board[1] + ' | ' + board[2] + ' | ' + board[3])


def player_input():
    marker = ''
    while marker != 'X' and marker != 'O':
        marker = input('Player 1 choose your marker: X or O ').upper()
        player1_marker = marker
        if player1_marker == 'X':
            player2_marker = 'O'
        else:
            player2_marker = 'X'
    return (player1_marker,player2_marker)


def choose_first():
    flip = randint(0,1)

    if flip == 0:
        return 'Player 1'
    else:
        return 'Player 2'


def do_operation(board,position,marker):
    board[position] = marker
    return board


def space_check(board,position):
    return board[position] == ' '


def full_board(board):
    for i in range(1,10):
        if space_check(board,i):
            return False
    return True


def player_choice(board):
    while True:
        position = int(input('Choose your next position(1-9): '))
        is_pos_correct = position in [1,2,3,4,5,6,7,8,9] and space_check(board,position)
        if is_pos_correct:
            break
    return position


def win_check(board,mark):
    return ((board[7] == mark and board[8] == mark and board[9] == mark) or  # across the top
            (board[4] == mark and board[5] == mark and board[6] == mark) or  # across the middle
            (board[1] == mark and board[2] == mark and board[3] == mark) or  # across the bottom
            (board[7] == mark and board[4] == mark and board[1] == mark) or  # down the middle
            (board[8] == mark and board[5] == mark and board[2] == mark) or  # down the middle
            (board[9] == mark and board[6] == mark and board[3] == mark) or  # down the right side
            (board[7] == mark and board[5] == mark and board[3] == mark) or  # diagonal
            (board[9] == mark and board[5] == mark and board[1] == mark))  # diagonal



def replay():
    return input('Do you want to play again? Y or N').upper().startswith('Y')


print('WELCOME TO TIC TAC TOE')

while True:

    the_board = [' ']*10
    player1_marker,player2_marker = player_input()
    turn = choose_first()

    play_game = input('Are you ready to play? Y or N').upper()

    if play_game == 'Y':
        game_on = True
    else:
        game_on = False


    while game_on:
        if turn == 'Player 1':
            display_board(the_board)
            position = player_choice(the_board)
            do_operation(the_board,position,player1_marker)

            if win_check(the_board,player1_marker):
                display_board(the_board)
                print('Player 1 has won!')
                game_on = False

            else:
                if full_board(the_board):
                    display_board(the_board)
                    print("IT'S A TIE")
                    game_on = False
                else:
                    turn = 'Player 2'

        else:
            display_board(the_board)
            position = player_choice(the_board)
            do_operation(the_board, position, player2_marker)

            if win_check(the_board, player2_marker):
                display_board(the_board)
                print('Player 2 has won!')
                game_on = False

            else:
                if full_board(the_board):
                    display_board(the_board)
                    print("IT'S A TIE")
                    game_on = False
                else:
                    turn = 'Player 1'


    if not replay():
        break













