class Teacher():
    def __init__(self, name):
        self.name = name
        self.students = {}

    def add_student(self, student):
        self.students[student.name] = student
    def __str__(self):
        return (f"Name = {self.name} , number of students is = {len(self.students)}")
    def is_in_class(self,studentname):
        return studentname in self.students

#TODO Add gender of student
class Student():
    def __init__(self,name,age):
        self.name = name
        self.age = age

    def __str__(self):
        return (f'Name of the student is {self.name} and is {self.age} year old.')


if __name__ == "__main__":
    teacher1 = Teacher('Miss Barrett')
    print(teacher1)

    student1 = Student('Aydin',6)
    print(student1)

    teacher1.add_student(student1)
    print(teacher1)

    student2 = Student('Dylan',6)
    teacher1.add_student(student2)
    print(teacher1)

    print(teacher1.is_in_class('Aydin'))