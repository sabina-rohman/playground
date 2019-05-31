class AddressBook:

    def __init__(self):
        self.address_book = []

    def add_person(self,f_name, l_name, address):
        person = [f_name, l_name, address]
        self.address_book.append(person)

    def get_address_book(self):
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
    address_book.add_person("Sabina", "Barbhuiya", "26, RM66UL")
    address_book.add_person("Aydin", "Mazumdar", "26, RM66UL")
    address_book.add_person("Monsur", "mazumdar", "26, RM66UL")

    address_book.add_person("Muskaan", "Singh", "561, IG55PL")
    address_book.add_person("Umer", "Farroq", "4, IG34EQ")
    address_book.add_person("Kirat", "Singh", "26, IG34RR")

    # print(address_book.get_address_book())
    # print(address_book.get_ppl_with_surname("singh"))

    # print(address_book.get_ppl_with_same_address("26 rm66ul"))
    print(address_book.get_ppl_with_same_postcode("ig3"))
    print(address_book.search("singh"))
    print(address_book.search("ig"))



