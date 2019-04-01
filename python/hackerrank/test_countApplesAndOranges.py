from unittest import TestCase
from apple_orange import countApplesAndOranges


class TestCountApplesAndOranges(TestCase):
    def test_countApplesAndOranges(self):
        expected = (1,1)
        actual =  countApplesAndOranges(7, 10, 4,12,[3],[-4])
        self.assertEqual(expected,actual)

