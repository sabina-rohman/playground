class Student:
    def __init__(self, student_name, age, roll_no, class_no):
        self.name = student_name
        self.age = age
        self.roll_no = roll_no
        self.class_no = class_no

    def describe_yourself(self):
        description = f'My name is {self.name}, my age is {self.age} years.'
        return description


def main():

    name_input = input("Whats your name: ")

    #student3 is an INSTANCE of Student class
    student3 = Student(name_input, 22, 1, 3)

    print(student3.describe_yourself())

main()