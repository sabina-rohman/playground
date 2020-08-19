class LinkedList {
    constructor(){
        this.length = 0;
        this.head = null;
    }

    size(){
        return this.length;
    }

    isEmpty(){
        return this.length === 0;
    }

    add(element){
        const node = new Node;
        if(this.head === null){
            this.head = node;
        } else {
            let currentnode = this.head;
            while(currentnode.next){
                currentnode = currentnode.nextSibling;
            }
            currentnode.next = node;
        }
        this.length++;
    }

    remove(element){
        let currentnode = this.head;
        let previousNode;
        if(currentnode.element === element){
            this.head = currentnode.next;
        } else {
            while(currentnode.element !== element){
                previousNode = currentnode;
                currentnode = currentnode.next;
            }
            previousNode.next = currentnode.next;
        }
        this.length--;
    }

    indexOf(element){
        let currentnode = this.head;
        let index = -1;
        while(currentnode){
            index++;
            if(currentnode.element === element){
                return index;
            }
            currentnode = currentnode.next;
        }
        return -1;
    }
}

class Node {
    constructor(element){
        this.element = element;
        this.next = next;
    }
}