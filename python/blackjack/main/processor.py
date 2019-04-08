from card import Card
from deck import Deck
from player import Player
from dealer import Dealer

class Processor:
    def run(self):
        player = Player(1000)
        while True:
            # Print an opening statement
            print('WELCOME TO BLACKJACK')
            # Create & shuffle the deck, deal two cards to each player
            deck = Deck()
            dealer = Dealer()
            # Set up the Player's chips

            # Prompt the Player for their bet
            while True:
                try:
                    player_bet = int(input(f'Place your bet(Balance = {player.get_balance()}): '))
                    player.place_bet(player_bet)
                    break
                except Exception as ex:
                    print(ex)
                    print('\n')

            # Show cards (but keep one dealer card hidden)
            card1 = deck.pop()
            card2 = deck.pop()
            card3 = deck.pop()
            card4 = deck.pop()

            player.accept_card(card1)
            player.accept_card(card2)

            dealer.accept_card(card3)
            dealer.accept_card(card4)

            print(player)
            print(dealer)

            playing = True
            player_has_won = 'S'

            while playing:  # recall this variable from our hit_or_stand function

                # Prompt for Player to Hit or Stand
                player_choice = input(('Do you want to HIT(H) OR STAND(S): ')).lower().strip()
                if player_choice == 'h':
                    card = deck.pop()
                    player.accept_card(card)
                    # Show cards (but keep one dealer card hidden)
                    print(player)
                    # If player's hand exceeds 21, run player_busts() and break out of loop
                    if player.get_value() > 21:
                        player_has_won = 'F'
                        print(f'YOU ARE BUSTED.(Value = {player.get_value()} > 21)')
                        playing = False
                    elif player.get_value() == 21:
                        player_has_won = 'T'
                        playing = False
                elif player_choice == 's':
                    playing = False


            # If Player hasn't busted, play Dealer's hand until Dealer reaches 17
            if player.has_busted() == False and player.get_value() != 21:
                dealer_playing = True
                while dealer_playing:
                    if dealer.get_value() > 21:
                        player_has_won = 'T'
                    if dealer.get_value() >= 17:
                        dealer_playing = False
                    else:
                        card = deck.pop()
                        dealer.accept_card(card)

            # Show all cards
            print(player)
            print(dealer.print_everything())

            # Run different winning scenarios
            if player_has_won == 'T':
                player.won_the_game()
                print('YOU HAVE WON')
            elif player_has_won == 'F':
                player.lost_the_game()
                print('YOU HAVE LOST')
            else:
                if player.get_value() > dealer.get_value():
                    player.won_the_game()
                    print('YOU HAVE WON')
                elif player.get_value() < dealer.get_value():
                    player.lost_the_game()
                    print('YOU HAVE LOST')
                elif player.get_value() == dealer.get_value():
                    print("IT'S A TIE")


            # Inform Player of their chips total
            print(f'Your new balance is {player.get_balance()}')
            # Ask to play again
            replay = input('Do you want to play again(Yes or No)').upper().startswith('Y')
            if not replay:
                break

if __name__ == '__main__':
    proccessor = Processor()
    proccessor.run()