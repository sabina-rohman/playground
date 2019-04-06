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


