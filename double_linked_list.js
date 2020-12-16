
class Node {
    //default initialization of Node 
	constructor(element) 
	{ 
		this.element = element; 
        this.next = null;
        this.prev = null;
	} 
} 


class DoubleLinkedList { 
	constructor() 
	{ 
        this.head = null;
        this.tail = null; 
		this.size = 0; 
    }
    //function to add element to the end of linked list
    add(element) 
    { 
        let node = new Node(element); 
        let current; 
        let previous;
        if (this.head == null) {
            this.head = node; 
            this.tail = node;
        } else { 
            current = this.head; 
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        } 
        this.size++; 
    }
    // function to remove any given element 
    removeElement(element) 
    { 
        let current = this.head;
        let prev = null; 
        while (current != null) { 
            if (current.element === element) { 
                if (prev == null) { 
                    this.head = current.next; 
                } else { 
                    prev.next = current.next; 
                } 
                this.size--; 
                return current.element; 
            } 
            prev = current; 
            current = current.next; 
        } 
        return -1; 
    } 
    //function to print the given linked list
    printList() 
    { 
        var curr = this.head; 
        var str = ""; 
        while (curr) { 
            str += curr.element + (curr.next ? '\n' : ''); 
            curr = curr.next; 
        } 
        console.log(str); 
    }
    
    // finds element and return index if found 
    findElement(element) 
    { 
        var count = 0; 
        var current = this.head; 

        while (current != null) { 
            if (current.element === element) {
                return count; 
            }
            count++; 
            current = current.next; 
        } 
        // if not found 
        return -1; 
    }
    
    // insert element at the position index 
    insertAtIndex(element, index) 
    { 
        if (index > 0 && index > this.size) 
            return false; 
        else {
            var node = new Node(element); 
            var current, prev; 

            current = this.head; 
            if (index == 0) { 
                node.next = this.head; 
                this.head = node;
                this.tail = node; 
            } else if(index === this.size){
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else { 
                current = this.head; 
                var iterator = 0;
                while (iterator < index) { 
                    iterator++; 
                    prev = current; 
                    current = current.next; 
                }
                node.next = current; 
                prev.next = node; 
                current.prev = node;
                node.prev = prev
            } 
            this.size++; 
        } 
    }

    // removes an element from the given index
    removeFromIndex(index) 
    { 
        if (index > 0 && index > this.size) 
            return -1; 
        else { 
            var current, previous, iterator = 0; 
            current = this.head; 
            previous = current; 

            // deleting first element 
            if (index === 0) { 
                this.head = current.next; 
            } else if(index === this.size - 1){
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = null;
            } else { 
                while (iterator < index) { 
                    iterator++; 
                    previous = current; 
                    current = current.next; 
                } 
                previous.next = current.next;
                current.next.prev = previous; 
            } 
            this.size--; 
            return current.element; 
        } 
    } 

} 



let list = new DoubleLinkedList();

list.add(10);
list.add(20);
list.add(15);

console.log('value of the list after adding 2');

list.printList();


list.removeElement(10);

console.log('list after removing element');
list.printList();

console.log('Position of 15 in linked list is ', list.findElement(15));

list.insertAtIndex(25,2);

console.log('added element(25) at index 1');
list.printList();

list.removeFromIndex(2);
console.log('list after remving index 2 element ');
list.printList();