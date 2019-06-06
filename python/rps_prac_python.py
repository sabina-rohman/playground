from random import choice
def play_rps():
     result = input("Do you want to play? ")
     while result == 'yes':
         #ask user for choice
         user_input = input("What do you choose: ROCK, PAPER OR SCISSOR?").lower()
         #computer choice
         computer_input = choice(['Rock', 'Paper', 'Scissor']).lower()
         print(computer_input)
         #compare and display result
         if user_input == computer_input:
             print("IT'S A TIE")
         else:
             if user_input == 'rock' and computer_input == 'scissor':
                 print('You are the winner')
             if user_input == 'rock' and computer_input == 'paper':
                 print('Computer is the winner')
             if user_input == 'scissor' and computer_input == 'paper':
                 print('You are the winner')
             if user_input == 'scissor' and computer_input == 'rock':
                 print('Computer is the winner')
             if user_input == 'paper' and computer_input == 'rock':
                 print('You are the winner')
             if user_input == 'paper' and computer_input == 'scissor':
                 print('Computer is the winner')

        #ask if want to play again
         result = input("Do you want to play again? ").lower()

         if result != 'yes':
            break



if __name__ == '__main__':
    play_rps()
