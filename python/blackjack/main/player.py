class Player:
    def __init__(self,balance):
        self.balance = balance
        self.cards = []
        self.bet_value = 0
        self.is_busted = False

    def get_balance(self):
        return self.balance

    def get_value(self):
        #TODO-Handle ace later
        sum = 0
        for card in self.cards:
            sum = sum + card.get_value()
        return sum

    def accept_card(self,card):
        self.cards.append(card)

    def place_bet(self,bet_value):
        if bet_value > self.balance:
            raise Exception('Bet value cannot be greater than balance')
        else:
            self.bet_value = bet_value
        self.cards = []


    def won_the_game(self):
        self.balance += self.bet_value
        self.is_busted = False

    def lost_the_game(self):
        self.balance -= self.bet_value
        self.is_busted = True

    def has_busted(self):
        return self.is_busted

    def __str__(self):
       result = f'Player:(Value = {self.get_value()})\n'
       for card in self.cards:
           result = result + str(card) + '\n'
       return result