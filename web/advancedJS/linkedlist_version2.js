class Node  {
  constructor(data){
    this.data = data;
    this.parent = null;
    this.child = null;
  }
}

function insert(head, data){
  var newNode = new Node(data);
  if(head === null){
    head = newNode;
    return head;
  }
  var iterator = head;
  while(iterator.child !== null){
    iterator = iterator.child;
  }
  iterator.child = newNode;
  newNode.parent = iterator;
  return head;
}

function prettyPrint(head) {
  var iterator = head;
  while(iterator !== null){
    console.log(iterator.data);
    iterator = iterator.child;
  }
}

var head = null;

head = insert(head, 'jahanara');
head = insert(head, 'moon');
head = insert(head, 'aydin');

prettyPrint(head);
