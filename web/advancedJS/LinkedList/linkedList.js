class LinkedList {
    constructor(){
        this.length = 0;
        this.head = null;
    }
    
    size() {
        return this.length;
    }

    head() {
        return this.head;
    }

    add(element) {
        const node = new Node(element);
        if(this.head === null){
            this.head = node;
        } else {
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }

        this.length++
    }

    remove(element) {
        let currentNode = this.head;
        var previousNode;
        if(currentNode.element === element){
            this.head = currentNode.next
        } else {
            while(currentNode.element !== element){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        this.length--;
    }

    isEmpty() {
        return this.length === 0;
    }

    // Find index of the element
    indexOf(element) {
        let currentNode = this.head;
        let index = -1;
        while(currentNode){
            index++;
            if(currentNode.element === element){
                return index;
            }
            currentNode = currentNode.next;
        }
        // if element isn't in the linkedList;
        return -1;
    }

    // Find element of the index
    elementOf(index) {
        let currentNode = this.head;
        let count = 0;
        while(count < index){
            count++;
            currentNode = currentNode.next;
        }
        return currentNode.element;
    }
}


class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}