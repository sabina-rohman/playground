# fruit_prices = {'apple':2.99,'orange':4.89}
# fruit_stock ={'apple':30, 'orange':40}
# fruit_color = {'apple':'red' , 'orange':'orange'}
fruit_name = 'Orange'.lower()
#
# try:
#     price = fruit_prices[fruit_name]
#     amount = fruit_stock[fruit_name]
#     color = fruit_color[fruit_name]
#     print(f"Fruit = {fruit_name}, Amount = {amount}, Price = {price}, Color = {color} ")
# except:
#     print("It is a KeyError")

class Fruit():
    def __init__(self,fruit_name,fruit_prices,fruit_stock,fruit_color):
        self.fruit_stock = fruit_stock
        self.fruit_color = fruit_color
        self.fruit_prices = fruit_prices
        self.fruit_name = fruit_name

apple = Fruit('apple',2.99,30,'red')
orange = Fruit('orange',3.99,40,'orange')
fruits = {'apple':apple, 'orange':orange}


fruit_instance = fruits[fruit_name]
print(f"Fruit = {fruit_name}, Amount = {fruit_instance.fruit_stock}, Price = {fruit_instance.fruit_prices}, Color = {fruit_instance.fruit_color} ")
