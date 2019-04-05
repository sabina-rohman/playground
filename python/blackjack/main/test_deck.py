from unittest import TestCase
from deck import Deck

class TestDeck(TestCase):
    def test_deck_is_created_correctly(self):
        #given
        expected_number_of_card = 52
        mydeck = Deck()
        #when
        actual_number_of_card = len(mydeck)
        #then
        self.assertEqual(expected_number_of_card, actual_number_of_card)


    def test_card_is_in_deck(self):
        #given
        mydeck = Deck()
        #then
        self.assertEqual(False,mydeck.contains('21', 'H'))
        self.assertEqual(False,mydeck.contains('2', 'z'))
        self.assertEqual(True, mydeck.contains('2', 'H'))
        self.assertEqual(True, mydeck.contains('3', 'H'))
        self.assertEqual(True, mydeck.contains('4', 'H'))
        self.assertEqual(True, mydeck.contains('5', 'H'))
        self.assertEqual(True, mydeck.contains('6', 'H'))
        self.assertEqual(True, mydeck.contains('7', 'H'))
        self.assertEqual(True, mydeck.contains('8', 'H'))
        self.assertEqual(True, mydeck.contains('9', 'H'))
        self.assertEqual(True, mydeck.contains('10', 'H'))
        self.assertEqual(True, mydeck.contains('J', 'H'))
        self.assertEqual(True, mydeck.contains('Q', 'H'))
        self.assertEqual(True, mydeck.contains('K', 'H'))
        self.assertEqual(True, mydeck.contains('A', 'H'))

        self.assertEqual(True, mydeck.contains('2', 'S'))
        self.assertEqual(True, mydeck.contains('3', 'S'))
        self.assertEqual(True, mydeck.contains('4', 'S'))
        self.assertEqual(True, mydeck.contains('5', 'S'))
        self.assertEqual(True, mydeck.contains('6', 'S'))
        self.assertEqual(True, mydeck.contains('7', 'S'))
        self.assertEqual(True, mydeck.contains('8', 'S'))
        self.assertEqual(True, mydeck.contains('9', 'S'))
        self.assertEqual(True, mydeck.contains('10', 'S'))
        self.assertEqual(True, mydeck.contains('J', 'S'))
        self.assertEqual(True, mydeck.contains('Q', 'S'))
        self.assertEqual(True, mydeck.contains('K', 'S'))
        self.assertEqual(True, mydeck.contains('A', 'S'))

        self.assertEqual(True, mydeck.contains('2', 'C'))
        self.assertEqual(True, mydeck.contains('3', 'C'))
        self.assertEqual(True, mydeck.contains('4', 'C'))
        self.assertEqual(True, mydeck.contains('5', 'C'))
        self.assertEqual(True, mydeck.contains('6', 'C'))
        self.assertEqual(True, mydeck.contains('7', 'C'))
        self.assertEqual(True, mydeck.contains('8', 'C'))
        self.assertEqual(True, mydeck.contains('9', 'C'))
        self.assertEqual(True, mydeck.contains('10', 'C'))
        self.assertEqual(True, mydeck.contains('J', 'C'))
        self.assertEqual(True, mydeck.contains('Q', 'C'))
        self.assertEqual(True, mydeck.contains('K', 'C'))
        self.assertEqual(True, mydeck.contains('A', 'C'))

        self.assertEqual(True, mydeck.contains('2', 'D'))
        self.assertEqual(True, mydeck.contains('3', 'D'))
        self.assertEqual(True, mydeck.contains('4', 'D'))
        self.assertEqual(True, mydeck.contains('5', 'D'))
        self.assertEqual(True, mydeck.contains('6', 'D'))
        self.assertEqual(True, mydeck.contains('7', 'D'))
        self.assertEqual(True, mydeck.contains('8', 'D'))
        self.assertEqual(True, mydeck.contains('9', 'D'))
        self.assertEqual(True, mydeck.contains('10', 'D'))
        self.assertEqual(True, mydeck.contains('J', 'D'))
        self.assertEqual(True, mydeck.contains('Q', 'D'))
        self.assertEqual(True, mydeck.contains('K', 'D'))
        self.assertEqual(True, mydeck.contains('A', 'D'))

    def test_deck_pops_card(self):
        mydeck = Deck()
        popped_card = mydeck.pop()
        self.assertEqual(51, len(mydeck))
        self.assertEqual(False, mydeck.contains(popped_card.get_number(),popped_card.get_symbol()))
        popped_card = mydeck.pop()
        self.assertEqual(50, len(mydeck))
        self.assertEqual(False, mydeck.contains(popped_card.get_number(), popped_card.get_symbol()))
        popped_card = mydeck.pop()
        self.assertEqual(False, mydeck.contains(popped_card.get_number(), popped_card.get_symbol()))
        self.assertEqual(49, len(mydeck))