// YOU CAN CHANGE ONE NODE TO ANOTHER NODE.

class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    size(){
        return this.length;
    }

    isEmpty(){
        return this.length === 0;
    }

    head(){
        return this.head;
    }

    add(element){
        const node = new Node(element);
        if(this.head === null){
            this.head = node;
        } else {
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = node;
        }
        this.length++
    }

    remove(element){
        let currentNode = this.head;
        let previousNode;
        if(currentNode.element === element){
            // we can change this.head (assign another node to ba head)
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

    elementOf(index){
        let currentNode = this.head;
        let count = 0;
        while(count < index){
            count++;
            currentNode = currentNode.index;
        }
        return currentNode.element;
    }
}

class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}