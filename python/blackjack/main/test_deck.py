from unittest import TestCase
from deck import Deck

class TestDeck(TestCase):
    def test_deck_is_created_correctly(self):
        #given
        expected_number_of_card = 52
        mydeck = Deck()
        #when
        actual_number_of_card = mydeck.get_number_of_cards()
        #then
        self.assertEqual(expected_number_of_card, actual_number_of_card)


    def test_card_is_in_deck(self):
        #given
        mydeck = Deck()
        #then
        self.assertEqual(True,  mydeck.is_card_available('2', 'H'))
        self.assertEqual(True,  mydeck.is_card_available('3', 'H'))
        self.assertEqual(True,  mydeck.is_card_available('4', 'H'))
        self.assertEqual(True,  mydeck.is_card_available('5', 'H'))
        self.assertEqual(True,  mydeck.is_card_available('6', 'H'))
        self.assertEqual(True,  mydeck.is_card_available('7', 'H'))
        self.assertEqual(True,  mydeck.is_card_available('8', 'H'))
        self.assertEqual(True,  mydeck.is_card_available('9', 'H'))
        self.assertEqual(True,  mydeck.is_card_available('10', 'H'))
        self.assertEqual(True,  mydeck.is_card_available('J', 'H'))
        self.assertEqual(True,  mydeck.is_card_available('Q', 'H'))
        self.assertEqual(True,  mydeck.is_card_available('K', 'H'))
        self.assertEqual(True,  mydeck.is_card_available('A', 'H'))
