class Player:
    def __init__(self,balance):
        self.balance = balance
        self.cards = []
        self.bet_value = 0
        self.is_busted = False

    def get_balance(self):
        return self.balance

    def get_value(self):
       #remove A from list and keep a count of it
        new_list = []
        count_a = 0
        for index in range(len(self.cards)):
            if self.cards[index].get_number() == 'A':
                count_a += 1
            else:
                new_list.append(self.cards[index])

        #sum all the cards other than A
        sum = 0
        for card in new_list:
            sum = sum + card.get_value()

        #add A accordingly


    def accept_card(self,card):
        self.cards.append(card)

    def place_bet(self,bet_value):
        if bet_value <= 0:
            raise Exception('Bet value cannot be negative')
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