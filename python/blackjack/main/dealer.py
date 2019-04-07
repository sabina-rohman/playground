class Dealer:
    def __init__(self):
        self.cards = []

    def get_value(self):
        # TODO-Handle ace later
        sum = 0
        for card in self.cards:
            sum = sum + card.get_value()
        return sum

    def accept_card(self, card):
        self.cards.append(card)


    def print_everything(self):
        result = f'Dealer:(Value = {self.get_value()})\n'
        for card in self.cards:
            result = result + str(card) + '\n'
        return result


    def __str__(self):
        result = 'Dealer:\n'
        found_hidden = False
        for card in self.cards:
            if found_hidden == False:
                result = result + 'HIDDEN\n'
                found_hidden = True
            else:
                result = result + str(card) + '\n'
        return result