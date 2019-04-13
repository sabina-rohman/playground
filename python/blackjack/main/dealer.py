from base_user import BaseUser

class Dealer(BaseUser):
    def __init__(self):
        BaseUser.__init__(self,'Dealer')



    def print_with_onecard_hidden(self):
        result = 'Dealer:\n'
        found_hidden = False
        for card in self.cards:
            if found_hidden == False:
                result = result + 'HIDDEN\n'
                found_hidden = True
            else:
                result = result + str(card) + '\n'
        return result