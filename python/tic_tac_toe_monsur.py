
def input_marker():
    """
    DOCSTRING: Ask User 1 for marker
    INPUT: Nothing
    OUTPUT: Tuple of User 1 and User 2 markers (User1_marker,User2_marker)
    """
    player1_marker = ''
    while player1_marker not in ['X','O'] :
        player1_marker = input('Player1 choose X or O : ').upper()
        if player1_marker == 'X':
            player2_marker = 'O'
        else:
            player2_marker = 'X'
    return (player1_marker,player2_marker)


from random import randint
def decide_first_player():
    """
    DOCSTRING: Decides randomly which player starts first
    INPUT: Nothing
    OUTPUT: User 1 or User 2
    """
    flip  = randint(0,1)
    if flip == 0:
        return 'Player1'
    else:
        return 'Player 2'




def player_input(board,marker):
    """
    DOCSTRING: Ask the user for  position and update the board with position
    :param board: Current game board
    :param marker: Player's marker
    :return:  New board
    """
    pass


def display_board(board):
    """
    DOCSTRING: Print the board in a console
    :param board: Current game board
    :return: None
    """
    print(' | | ')
    print(board[7] + '|' + board[8] + '|' + board[9])
    print(' | | ')
    print(board[4] + '|' + board[5] + '|' + board[6])
    print(' | | ')
    print(board[1] + '|' + board[2] + '|' + board[3])
    print(' | | ')


def get_game_status(board):
    """
    DOCSTRING:
    :param board:
    :return: Values = ['Tie','X win','O win', 'Keep playing']
    """
    pass


def start_game():
    markers = input_marker()
    print(markers)
+6
    first_player = decide_first_player()
    print(first_player)

    board = [' ']*10
    p1_marker = markers[0]
    p2_marker = markers[1]

    game_still_running = True
    while game_still_running:



start_game()