import random
def display_board(board):
    print('\n' * 100)
    print(board[7] + '|' + board[8] + '|' + board[9])
    print(' | | ')
    print('------')
    print(board[4] + '|' + board[5] + '|' + board[6])
    print(' | | ')
    print('-------')
    print(board[1] + '|' + board[2] + '|' + board[3])
    print(' | | ')


def player_input():

    marker = ''

    while marker != 'X' and marker != 'O':
        marker = input('Player 1 choose X or O : ').upper()

        player1 = marker
        if player1 == 'X':
            player2 = 'O'
        else:
            player2 = 'X'
    return (player1,player2)


def place_marker(board,marker,position):
    board[position] = marker
    return board


def win_check(board,mark):
    return ((board[7] == mark and board[8] == mark and board[9] == mark) or  # across the top
            (board[4] == mark and board[5] == mark and board[6] == mark) or  # across the middle
            (board[1] == mark and board[2] == mark and board[3] == mark) or  # across the bottom
            (board[7] == mark and board[4] == mark and board[1] == mark) or  # down the middle
            (board[8] == mark and board[5] == mark and board[2] == mark) or  # down the middle
            (board[9] == mark and board[6] == mark and board[3] == mark) or  # down the right side
            (board[7] == mark and board[5] == mark and board[3] == mark) or  # diagonal
            (board[9] == mark and board[5] == mark and board[1] == mark))  # diagonal


def choose_first():
    flip = random.randint(0,1)
    if flip == 0:
        return 'Player1'
    else:
        return 'Player2'


def space_check(board,position):
    #comparision--->below will ask question
    return board[position] == ' '


def full_board_check(board):
    for i in range(1,10):
        if space_check(board,i):
            return False
    return True


def player_choice(board):
    position = 0
    while position not in [1,2,3,4,5,6,7,8,9] and not space_check(board,position):
        position = int(input('Choose your next position: (1-9) '))
    return position

def replay():
    return input('Do you play again? Enter Yes or No: ').lower().startswith('y')


#WHILE LOOP TO KEEP RUNNING THE GAME
print('Welcome to TIC TAC TOE')

while True:

    #PLAY THE GAME


    ##SET EVERYTHING UP(BOARD,WHOS FIRST,CHOOSE MARKERS X,O)
    the_board = [' ']*10
    player1_marker,player2_marker = player_input()

    turn = choose_first()
    print(turn + ' will go first')

    play_game = input('Ready to play? y or n ')

    # create a variable and set it true if its 'y'
    if play_game == 'y':
        game_on = True
    else:
        game_on = False

  ##GAME PLAY
    while game_on:

        if turn == 'Player 1':
            #show the board
            display_board(the_board)
            #choose a position
            position = player_choice(the_board)
            #Place the marker in the position
            place_marker(the_board,player1_marker,position)
            #Check if they won
            if win_check(the_board,player1_marker):
                display_board(the_board)
                print('PLAYER 1 HAS WON!!')
                game_on = False
            else:
                if full_board_check(the_board):
                    display_board(the_board)
                    print('TIE GAME')
                    game_on = False
                else:
                    turn = 'Player 2'

    ###PLAYER ONE TURN
        else:
            # show the board

            display_board(the_board)
            # choose a position
            position = player_choice(the_board)
            # Place the marker in the position
            place_marker(the_board, player2_marker, position)
            # Check if they won
            if win_check(the_board, player2_marker):
                display_board(the_board)
                print('PLAYER 2 HAS WON!!')
                game_on = False
            else:
                if full_board_check(the_board):
                    display_board(the_board)
                    print('TIE GAME oops')
                    game_on = False
                else:
                    turn = 'Player 1'

    ###PLAYER TWO TURN

    if not replay():
           break

#BREAK OUT OF THE WHILE LOOP ON replay()




