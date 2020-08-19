class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }
  
  insert(data){
    var newNode = new Node(data);
    if(this.head === null){
      this.head = newNode;
    } else {
      var node = this.head;
      while(node.next !== null){
        node = node.next;
      }
      node.next = newNode;
    }
    return this.head;
  }
  
  walk(){
    console.log("printing the linked list");
    var node = this.head;
    while(node !== null){
      console.log(node.data);
      node = node.next;
    }
  }
}

var ll = new LinkedList()
ll.walk()
ll.insert("Aydin")
ll.insert("Monsur")
ll.walk()