class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    size(){
        return this.length;
    }

    add(element){
       const node = new Node(element)
       if(this.head === null){
           this.head = node;
       } else {
           let currentNode = this.head;
           while(currentNode.next){
               currentNode = currentNode.next;
           }
           currentNode.next = node;
       }
       this.length++;
    }

    remove(element){
        let currentNode = this.head;
        let previousNode;
        if(currentNode.element === element){
            this.head = currentNode.next;
        } else {
            while(currentNode.element !== element){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        this.length--;
    }

    indexOf(element){
        let currentNode = this.head;
        let index = -1;
        while(currentNode){
            index++;
            if(currentNode.element === element){
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1;
    }
}

class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}