class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    isEmpty(){
        return this.length === 0;
    }

    size(){
        return this.length;
    }

    add(element){
        let node = Node(element);
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

    addAt(index, element){
        let node = new Node(element);
        let currentNode = this.head;
        let currentIndex = 0;
        let previousNode;
        if(index < 0 || index >= this.length){
            return false;
        } else if(index === 0){
            node.next = currentNode;
            this.head = node;
        } else {
            while(currentIndex < index){
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
    }

    remove(){
        if(this.length === 0){
            return false;
        } else if(this.length === 1){
            this.head = null;
        } else {
            let currentNode = this.head;
            let previousNode;
            while(currentNode.next){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }
        this.length--;
        return true;
    }

    removeElement(element){
        if(this.length === 0){
            return false;
        } else if(this.length === 1){
            this.head = null;
        } else {
            let currentNode = this.head;
            let previousNode;
            while(currentNode.element !== element){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            if(currentNode.element === element){
                previousNode.next = currentNode.next;
            }
            
        }
        this.length--;
    }

    removeAt(index, element){
        if(index < 0 || index >= this.length){
            return false;
        } else if(index === 0){
            this.head = this.head.next;
        } else {
            let currentNode = this.head;
            let previousNode;
            let currentIndex = 0;
            while(currentIndex < index){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            if(currentNode.element === element){
                previousNode.next = currentNode.next;
            }
        }
        this.length--;
        return currentNode.element;
    }

    indexOf(element){
        let index = -1;
        
        if(this.length === 0){
            return -1;
        } else {
            let currentNode = this.head;
            this.previousNode;
            while(currentNode.element !== element){
                index++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            if(currentNode.element === element){
                return index;
            }
        }
        return -1;
    }

    elementOf(index){
        if(this.length === 0){
            return false;
        } else {
            let currentIndex = 0;
            let currentNode = this.head;
            let previousNode;
            while(currentIndex < index){
                currentNode = currentNode.next
            }
            return currentNode.element;
        }
        
    }

}

class Node {
    constructor(element){
        this.element = element;
        this.next = null
    }
}