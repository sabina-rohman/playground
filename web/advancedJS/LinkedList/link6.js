class LinkedList {
    constructor(){
        this.length = 0;
        this.head = null
    }

    size(){
        return this.length;
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
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.length++
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
            while(index > currentIndex){
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        this.length++;
    }

    remove(){
        if(this.length === 0){
            return false;
        }
        if(this.length === 1){
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
        this.length--
        return true;
    }

    removeEl(element){
        if(this.length === 0){
            return false;
        } else if(this.head.element === element){
            this.head = this.head.next
        } else {
            let currentNode = this.head;
            let previousNode;
            while(currentNode.element !== element){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
            this.length--
            return true;
        }
    }

    removeAt(index, element){
        if(index < 0 || index >= this.length){
            return false;
        } else if(index === 0){
            this.head = this.head.next;
        } else {
            let currentNode = this.head;
            let currentIndex = 0;
            let previousNode;

            while(currentIndex < index){
                currentIndex++;
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

    isEmpty(){
        return this.length === 0;
    }

    indexOf(element){
        let index = -1;
        if(this.length === 0) {
            return -1;
        } else {
            let currentNode = this.head;
            while(currentNode.element !== element){
                index++;
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
            let count = 0;
            let currentNode = this.head;
            while(count < index){
                index++;
                currentNode = currentNode.next;
            }
            return currentNode.element;
        }
    }
}

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
const l = new LinkedList();

l.add('tomato');
l.add('potato');
l.add('blueberry');
l.add('papaya');
l.remove();
l.add('onion')
l.addAt(2, 'banana')
console.log(l.elementOf(2));
console.log(l.size());
// console.log(l.head());
// const n = new Node('potato');
// console.log(n.element);