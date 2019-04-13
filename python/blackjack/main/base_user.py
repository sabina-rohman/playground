class BaseUser:
    def __init__(self, name):
        self.cards = []
        self.name = name


    def accept_card(self,card):
        self.cards.append(card)


    def __str__(self):
        result = f'{self.name}:(Value = {self.get_value()})\n'
        for card in self.cards:
            result = result + str(card) + '\n'
        return result

    def adjust_ace(self,n,sum):
        for i in range(n):
            if sum > 21:
                sum = sum - 10
            else:
                break
        return sum


    def get_count_ace(self):
        ace_count = 0
        for card in self.cards:
            if card.get_number() == 'A':
                ace_count += 1
        return ace_count


    def get_value(self):
        sum = 0
        for card in self.cards:
            sum = sum + card.get_value()

        # Adjust ace values
        count_ace = self.get_count_ace()
        adjusted_sum = self.adjust_ace(count_ace,sum)
        return adjusted_sum
