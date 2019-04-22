class Movies():

    def __init__(self, movie_names):
        self.movie_names = movie_names
        self.index = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.index >= len(self.movie_names):
            raise StopIteration

        x = self.movie_names[self.index]
        self.index += 1
        return x



if __name__ == '__main__':
    movies_list = ['Sholay','Gully Boy', 'Mr. Bean']
    vue = Movies(movies_list)
    for i in vue:
        print(i)