class LinkedList {
    constructor(){
        this.length = 0;
        this.head = null;
    }

    add(element){
        // step1: create the new node
        const node = new Node(element);
        // step2: check if head is null
        if(this.head === null){
            this.head = node;
        } else {
            let currentnode = this.head;
            while(currentnode.next){
                currentnode = currentnode.next;
            }
            currentnode.next = node;
        }
        this.length++
    }

    removeFromEnd() {
        if(this.length === 0){
            return false;
        } else if(this.length === 1){
            this.head = null
        } else {
            let currentnode = this.head;
            let previousnode;
            while(currentnode.next){
                previousnode = currentnode;
                currentnode = currentnode.next;
            }
            previousnode.next = null;
        }
        this.length--;
        return true;
    }

    remove(element){
        if(this.length === 0){
            return false;
        } else if(this.length === 1){
            if(this.head.element === element){
                this.head = null;
            }
        } else {
            let currentnode = this.head;
            let previousnode;
            while(currentnode.element !== element){
                previousnode = currentnode;
                currentnode = currentnode.next;
            }
            // the linked list might not contain the elemen at all. in that case double check if its there after the while loop.
            if(currentnode.element === element){
                previousnode.next = currentnode.next;
            }
        }
        this.length--;
        return true;
    }
}

class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}