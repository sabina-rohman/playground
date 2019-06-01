class Person:
    def __init__(self, f_name, l_name, address):
        self.address = address
        self.l_name = l_name
        self.f_name = f_name


class AddressBook:

    def __init__(self):
        self.address_book = []

    def add_person(self, person):
        # person = [f_name, l_name, address]
        self.address_book.append(person)

    def get_people(self):
        return self.address_book

    def get_ppl_with_surname(self, l_name):
        result = []
        for i in self.address_book:
            if i[1].lower() == l_name.lower():
                result.append(i)
        return result

    def get_ppl_with_same_address(self, address):
        result = []
        for i in self.address_book:
            if i[2].lower().replace(',', '') == address.lower().replace(',', ''):
                result.append(i)
        return result

    def get_ppl_with_same_postcode(self,postcode):
        result = []
        for person_info in self.address_book:
            # remember that person_info is a list itself.(eg: ["sabina", "barbhuiya", "26 RM66UL"]
            # Address book is a list of lists
            person_address = person_info[2] # eg: "26, RM66UL"
            person_postcode = person_address.split()[1] # eg: RM66UL
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


if __name__ == "__main__":
    address_book = AddressBook()
    sabina = Person("Sabina", "Barbhuiya", "26, RM66UL")
    monsur = Person("Monsur", "mazumdar", "26, RM66UL")
    aydin = Person("Aydin", "Mazumdar", "26, RM66UL")
    muskaan = Person("Muskaan", "Singh", "561, IG55PL")
    umer = Person("Umer", "Farroq", "4, IG34EQ")
    kirat = Person("Kirat", "Singh", "26, IG34RR")

    address_book.add_person(sabina)
    address_book.add_person(monsur)
    address_book.add_person(aydin)

    address_book.add_person(muskaan)
    address_book.add_person(umer)
    address_book.add_person(kirat)

    # print(address_book.get_address_book())
    # print(address_book.get_ppl_with_surname("singh"))

    # print(address_book.get_ppl_with_same_address("26 rm66ul"))
    # print(address_book.get_ppl_with_same_postcode("ig3"))
    # print(address_book.search("singh"))
    # print(address_book.search("ig"))

    # sabina is instance(object of class person) and can access its attributes like f_name, l_name and address
    print(sabina.f_name)
    # get_people() gives a list of objects and [0] gives sabina
    print(address_book.get_people()[0].f_name)
    print(address_book.get_people()[1] == sabina)


