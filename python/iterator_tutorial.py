x = "Hello"
y = [1,2,3]
z = {'k1': 30, 'k2': 40}
m = 52

class School():

    def __init__(self):
        self.students = ['Aydin', 'Monsur', 'Sabina']
        self.index = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.index >= len(self.students):
            raise StopIteration

        student = self.students[self.index]
        self.index += 1
        return student



if __name__ == '__main__':
    furze = School()
    for i in furze:
        print(i)