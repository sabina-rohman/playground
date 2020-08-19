class MyError(Exception):

    def __init__(self, msg):
        Exception.__init__(self,msg)
        self.msg1 = msg
        pass

if __name__ == '__main__':
    error = MyError("Blah")
    print(error)