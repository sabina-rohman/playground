class Employee:

    def __init__(self,first,last,pay):
        self.first = first
        self.last = last
        self.pay = pay
        self.email = first + '.' + last + '@company.com'


    def full_name(self):
        return '{} {} works in Bank of America'.format(self.first,self.last)

emp1 = Employee('Aydin','Mazumdar',50000)
emp2 = Employee('Monsur','Mazumdar',60000)


print(emp1.email)
print(emp2.email)

print('\n')

print(emp1.full_name())
print(emp2.full_name())

print('\n')

print(Employee.full_name(emp1))

##INSTANCE VARIABLE