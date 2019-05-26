class Order:
    prices = {'Fish & Chips': 6.99, "Coke": 2.99, "Cake": 4.59}
    def __init__(self, table_no):
        self.table_no = table_no
        self.items = []

    def add_item(self, item):
        if item not in Order.prices:
            raise Exception(f"Sorry {item} is not served in our restaurent")
        return self.items.append(item)

    def get_items(self):
        return self.items

    def get_table_no(self):
        return self.table_no

    def get_final_bill(self):
        result = 0
        for i in self.items:
            result += Order.prices[i]
        return result

    def get_vat(self):
        return (20/100) * self.get_final_bill()

    def print_receipt(self):
        print(f"Table number : {self.get_table_no()}\n-----------------------------------------")
        for index, item in enumerate(self.get_items()):
            print('{0:<5}   {1:<20}  {2:<5}'.format(index + 1, item, Order.prices[item]))
            print('-----------------------------------------')
        print(f"Net price is:                  {self.get_final_bill()}")
        print('-----------------------------------------')
        print(f"VAT price:                     {round(self.get_vat(), 2)}")
        print('-----------------------------------------')
        print(f"Total price is:                {self.get_final_bill() + round(self.get_vat(), 2)}")


if __name__ == '__main__':
    order = Order(24)
    order.add_item('Fish & Chips')
    order.add_item('Coke')
    order.add_item('Cake')

    order.print_receipt()


