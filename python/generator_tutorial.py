class Movies():

    def __init__(self):
        self.__movies = ['a', 'b', 'c']
        self.__ratings = [1,2,3]

    def get_items(self):
        for i in self.__ratings:
            yield i


if __name__ == '__main__':
    new_realease = Movies()

    for i in new_realease.__movies:
        print(i)

