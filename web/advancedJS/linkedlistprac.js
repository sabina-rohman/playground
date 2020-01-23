class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

var head = new Node('A1');
var node1 = new Node('B1');
head.next = node1;

var node2 = new Node('C1');
node1.next = node2;

function walk(node) {
  while(node !== null){
    console.log(node.data);
    node = node.next;
  }
}

function insert(head, data) {
  var newNode = new Node(data);
  if(head === null){
    head = newNode;
  } else {
    var node = head;
    while(node.next !== null){
      node = node.next;
    }
    node.next = newNode
  }
  return head;
}