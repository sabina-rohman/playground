from unittest import TestCase
from time_conversion import timeConversion


class TestTimeConversion(TestCase):

    def test_time_conversion_pm(self):
        expected = '19:05:40'
        actual = timeConversion('07:05:40PM')
        self.assertEqual(expected, actual)

    def test_time_conversion_am(self):
        expected = '08:12:30'
        actual = timeConversion('08:12:30AM')
        self.assertEqual(expected, actual)

    def test_time_conversion_midnight(self):
        expected = '00:12:30'
        actual = timeConversion('12:12:30AM')
        self.assertEqual(expected, actual)

    def test_time_conversion_midday(self):
        expected = '12:12:30'
        actual = timeConversion('12:12:30PM')
        self.assertEqual(expected, actual)
