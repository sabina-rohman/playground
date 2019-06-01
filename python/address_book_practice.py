class Person:
    def __init__(self, f_name, l_name, address):
        self.f_name = f_name
        self.l_name = l_name
        self.address = address


class AddressBook:
    def __init__(self):
        self.address_book = []

    def add_person(self, person):
        self.address_book.append(person)

    def get_people(self):
        return self.address_book

    def get_people_with_same_surname(self, surname):
        result = []
        for person_info in self.address_book:
            if person_info[1].lower() == surname.lower():
                result.append(surname)
        return result

    def get_people_with_same_address(self, address):
        result = []
        for person_info in self.address_book:
            if person_info[2].lower().replace(',', '') == address.lower().replace(',', ''):
                result.append(person_info)
        return result


    def get_people_with_with_same_postcode(self, postcode):
        result = []
        for person_info in self.address_book:
            person_address = person_info[2]
            person_postcode = person_address.split()[1]
            if person_postcode.lower().startswith(postcode):
                result.append(person_info)
        return result

    def search(self, search_by):
        result = []
        for person_info in self.address_book:
            j = ' '.join(person_info)
            if search_by.lower() in j.lower():
                result.append(person_info)
        return result


if __name__ == '__main__':
    address_book = AddressBook()
    sabina = Person("Sabina", "Barbhuiya", "26, RM66UL")
    monsur = Person("Monsur", "mazumdar", "26, RM66UL")
    aydin = Person("Aydin", "Mazumdar", "26, RM66UL")

    address_book.add_person(sabina)
    address_book.add_person(monsur)
    address_book.add_person(aydin)

    print(sabina.l_name)
    print(address_book.get_people()[0].address)