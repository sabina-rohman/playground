from unittest import TestCase
from player import Player

class TestPlayer(TestCase):
    def test_user_has_correct_starting_balance(self):
        #given
        my_player = Player(1000)
        #when
        self.assertEqual(1000, my_player.get_balance())

    def test_user_has_zero_starting_value(self):
        my_player = Player(1000)
        # when
        self.assertEqual(0, my_player.get_value())