fruit_name = input('Please provide the fruit name: ').lower()

class Fruit():

    def __init__(self,fruit_name, fruit_stock, fruit_price,fruit_color):
        self.fruit_name = fruit_name
        self.fruit_stock = fruit_stock
        self.fruit_price = fruit_price
        self.fruit_color = fruit_color


apple = Fruit('apple',30,2.99 ,'red')
orange = Fruit('orange',40,3.49,'orange')
fruits = {'apple':apple, 'orange':orange}

try:
    fruit_instance = fruits[fruit_name]
    print(f"Fruit = {fruit_name}, Amount = {fruit_instance.fruit_stock}, Price = {fruit_instance.fruit_price}, Color = {fruit_instance.fruit_color}")

except:
    print(f'{fruit_name} is out of stock')