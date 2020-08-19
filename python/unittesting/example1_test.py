import unittest
import example1

class TestCap(unittest.TestCase):

    def test_two_positive_number(self):
        expected = 7
        actual = example1.add(3, 4)
        self.assertEqual(actual, expected)

    def test_two_negative_number(self):
        expected = -7
        actual = example1.add(-3, -4)
        self.assertEqual(expected, actual, 'when you subract two egative numbers, the result should be negative')

    def test_one_negative_one_positive_number(self):
        expected = 1
        actual = example1.add(-3, 4)
        self.assertEqual(actual, expected)

    def when_user_gives_odd_number_then_return_true(self):
        expected = True
        actual = example1.is_odd(5)
        self.assertEqual(actual,expected)

    def when_user_gives_even_number_then_return_false(self):
        expected = False
        actual = example1.is_odd(4)
        self.assertEqual(actual,expected)


if __name__ == '__main__':
    unittest.main()
