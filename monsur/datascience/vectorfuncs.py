from functools import reduce
import math
import operator


class Vector:

    def __init__(self, vector):
        self.vector = vector

    def scalar_multiply(self, scalar):
        return Vector([v_i * scalar for v_i in self.vector])

    def dot(self, other):
        return (self * other).collapse()

    def collapse(self):
        return sum(self.vector)

    def sum_of_squares(self):
        return self.dot(self)

    def magnitude(self):
        return math.sqrt(self.sum_of_squares())

    def squared_distance(self, other):
        return (self - other).sum_of_squares()

    def distance(self, other):
        """ sqrt(sum of (vi**2 - wi**2)) """
        return math.sqrt(self.squared_distance(other))

    @staticmethod
    def sum(vectors):
        return reduce(operator.add, vectors)

    @staticmethod
    def mean(vectors):
        return Vector.sum(vectors).scalar_multiply(1 / len(vectors))

    def __add__(self, other):
        return Vector([v_i + w_i for v_i, w_i in zip(self.vector, other.vector)])

    def __sub__(self, other):
        return Vector([v_i - w_i for v_i, w_i in zip(self.vector, other.vector)])

    def __mul__(self, other):
        return Vector([v_i * w_i for v_i, w_i in zip(self.vector, other.vector)])

    def __truediv__(self, other):
        return Vector([v_i / w_i for v_i, w_i in zip(self.vector, other.vector)])

    def __str__(self):
        return str(self.vector)


if __name__ == "__main__":
    v = Vector([1, 2, 3])
    w = Vector([10, 20, 30])
    z = Vector([100, 200, 300])
    print(Vector.sum([v, w, z]))
    print(v - w - z)
    print(v * w * z)
    print(Vector.mean([v, w, z]))
    print(v.dot(w))
    print(v.sum_of_squares())
    print(v.magnitude())
    print(v.distance(w))
