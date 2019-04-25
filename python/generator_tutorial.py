class Movies():

    def __init__(self):
        self.movies = ['a', 'b', 'c']
        self.ratings = [1,2,3]

    def get_items(self):
        for i in self.ratings:
            yield i


if __name__ == '__main__':
    new_realease = Movies()

    for i in new_realease.movies:
        print(i)

