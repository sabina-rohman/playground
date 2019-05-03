class Phonebook:

    def __init__(self):
        self.__phone_numbers = {}


    def add_phone_number(self, phone_number, name):
        if phone_number in self.__phone_numbers:
            raise Exception("This phone number already exists in the phonebook")

        self.__phone_numbers[phone_number] = name


    def remove_phone_number(self, phone_number):
        del self.__phone_numbers[phone_number]


    def get_info(self, phone_number):
        if phone_number not in self.__phone_numbers:
            raise Exception("Phone number is not in Phone book")

        return self.__phone_numbers[phone_number]




    def search_name(self, name):
        numbers = []
        for key in self.__phone_numbers:
            val_dicty = self.__phone_numbers[key]
            if val_dicty == name:
                numbers.append(key)
        return numbers




if __name__ == '__main__':
    phonebook = Phonebook()
    phonebook.add_phone_number(123,'Aydin')
    phonebook.add_phone_number(456,'Aydin')
    phonebook.add_phone_number(987,'Sabina')
    phonebook.add_phone_number(966,'Sabina')
    phonebook.add_phone_number(357,'Monsur')
    #phonebook.add_phone_number(357,'Jashaan')

    # print(phonebook.get_info(123))
    # phonebook.remove_phone_number(123)
    # print(phonebook.get_info(123))

    print(phonebook.search_name('Sabina'))
    print(phonebook.search_name('Monsur'))
    print(phonebook.get_info(4666))

