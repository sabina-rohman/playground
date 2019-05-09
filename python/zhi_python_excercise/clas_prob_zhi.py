class UpperString:
    def __init__(self):
        self.result = ''

    def get_string(self):
        self.result = input("Please provide a string: ")

    def to_upper(self):
        return self.result.upper()

if __name__ == '__main__':
    item = UpperString()
    item.get_string()
    print(item.to_upper())



