from card import Card

class Deck:
   def __init__(self):
       self.cards = []
       self.cards.append(Card('2', 'H'))
       self.cards.append(Card('3', 'H'))
       self.cards.append(Card('4', 'H'))
       self.cards.append(Card('5', 'H'))
       self.cards.append(Card('6', 'H'))
       self.cards.append(Card('7', 'H'))
       self.cards.append(Card('8', 'H'))
       self.cards.append(Card('9', 'H'))
       self.cards.append(Card('10', 'H'))
       self.cards.append(Card('J', 'H'))
       self.cards.append(Card('Q', 'H'))
       self.cards.append(Card('K', 'H'))
       self.cards.append(Card('A', 'H'))

       self.cards.append(Card('2', 'S'))
       self.cards.append(Card('3', 'S'))
       self.cards.append(Card('4', 'S'))
       self.cards.append(Card('5', 'S'))
       self.cards.append(Card('6', 'S'))
       self.cards.append(Card('7', 'S'))
       self.cards.append(Card('8', 'S'))
       self.cards.append(Card('9', 'S'))
       self.cards.append(Card('10', 'S'))
       self.cards.append(Card('J', 'S'))
       self.cards.append(Card('Q', 'S'))
       self.cards.append(Card('K', 'S'))
       self.cards.append(Card('A', 'S'))

       self.cards.append(Card('2', 'C'))
       self.cards.append(Card('3', 'C'))
       self.cards.append(Card('4', 'C'))
       self.cards.append(Card('5', 'C'))
       self.cards.append(Card('6', 'C'))
       self.cards.append(Card('7', 'C'))
       self.cards.append(Card('8', 'C'))
       self.cards.append(Card('9', 'C'))
       self.cards.append(Card('10', 'C'))
       self.cards.append(Card('J', 'C'))
       self.cards.append(Card('Q', 'C'))
       self.cards.append(Card('K', 'C'))
       self.cards.append(Card('A', 'C'))

       self.cards.append(Card('2', 'D'))
       self.cards.append(Card('3', 'D'))
       self.cards.append(Card('4', 'D'))
       self.cards.append(Card('5', 'D'))
       self.cards.append(Card('6', 'D'))
       self.cards.append(Card('7', 'D'))
       self.cards.append(Card('8', 'D'))
       self.cards.append(Card('9', 'D'))
       self.cards.append(Card('10', 'D'))
       self.cards.append(Card('J', 'D'))
       self.cards.append(Card('Q', 'D'))
       self.cards.append(Card('K', 'D'))
       self.cards.append(Card('A', 'D'))

   def get_number_of_cards(self):
       return len(self.cards)

   def is_card_available(self,number,symbol):
       for i in self.cards:
           if i.get_number() == number and i.get_symbol() == symbol:
               return True
       return False