#two.py
import one_2

print('Top level in two_2.py')
one_2.func()

if __name__ == '__main__':
	print('two_2 is being called directly')

else:
	print('two_2 is being imported into other module')