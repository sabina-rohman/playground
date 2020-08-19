#one.py

def func():
	print('I am a func in one_2.py')

print('Top level in one_2.py')


if __name__ == '__main__':
	print('one_2.py is being run directly')

else:
	print('one_2.py is being imported')