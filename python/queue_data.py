import queue
q = queue.Queue(5)
#q.__doc__
q.put(1)
q.put(2)
q.put(3)
q.put(4)



print(q.get())
print(q.get())
print(q.get())
print(q.get())
print(q.get())