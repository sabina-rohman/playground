class Card:

    def __init__(self,number,symbol):
        self.number = number
        self.symbol = symbol

    def get_number(self):
        return self.number

    def get_symbol(self):
        return self.symbol

    def get_value(self):
        if self.number in ['K', 'Q', 'J']:
            return 10
        elif self.number == 'A':
            return 1
        else:
            return int(self.number)

    def __str__(self):
        return self.number + " of " + self.symbol