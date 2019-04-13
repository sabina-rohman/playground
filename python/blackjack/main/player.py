from base_user import BaseUser

class Player(BaseUser):
    def __init__(self,balance):
        BaseUser.__init__(self,'Player')
        self.balance = balance
        self.is_busted = False


    def get_balance(self):
        return self.balance


    def place_bet(self,bet_value):
        if bet_value <= 0:
            raise Exception('Bet value cannot be negative')
        if bet_value > self.balance:
            raise Exception('Bet value cannot be greater than balance')
        else:
            self.bet_value = bet_value
        #Clear any cards from last game
        self.cards = []


    def won_the_game(self):
        self.balance += self.bet_value
        self.is_busted = False

    def lost_the_game(self):
        self.balance -= self.bet_value
        self.is_busted = True

    def has_busted(self):
        return self.is_busted

