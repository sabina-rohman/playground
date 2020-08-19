from unittest import TestCase
from card import Card

class TestCard(TestCase):
    def test_card_is_created_correctly(self):
        #given
        expected_number = '2'
        expected_symbol = 'H'
        mycard = Card(expected_number, expected_symbol)
        #when
        actual_number = mycard.get_number()
        actual_symbol = mycard.get_symbol()
        #then
        self.assertEqual(expected_number, actual_number)
        self.assertEqual(expected_symbol, actual_symbol)

    def test_card_returns_value_correctly(self):
        # given
        expected_value = 2
        mycard = Card('2', 'H')
        # when
        actual_value = mycard.get_value()
        # then
        self.assertEqual(expected_value, actual_value)

    def test_card_returns_king_value_correctly(self):
        # given
        expected_value = 10
        mycard = Card('K', 'H')
        # when
        actual_value = mycard.get_value()
        # then
        self.assertEqual(expected_value, actual_value)

    def test_card_returns_queen_value_correctly(self):
        # given
        expected_value = 10
        mycard = Card('Q', 'H')
        # when
        actual_value = mycard.get_value()
        # then
        self.assertEqual(expected_value, actual_value)

    def test_card_returns_jack_value_correctly(self):
        # given
        expected_value = 10
        mycard = Card('J', 'H')
        # when
        actual_value = mycard.get_value()
        # then
        self.assertEqual(expected_value, actual_value)

    def test_card_returns_ace_value_correctly(self):
        # given
        expected_value = 1
        mycard = Card('A', 'H')
        # when
        actual_value = mycard.get_value()
        # then
        self.assertEqual(expected_value, actual_value)
