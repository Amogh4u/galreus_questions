
class Node {
    //default initialization of Node 
	constructor(element) 
	{ 
		this.element = element; 
		this.next = null
	} 
} 

class SingleLinkedList { 
	constructor() 
	{ 
		this.head = null; 
		this.size = 0; 
    }
    //function to add element to the end of linked list
    add(element) 
    { 
        let node = new Node(element); 
        let current; 
        if (this.head == null) 
            this.head = node; 
        else { 
            current = this.head; 
            while (current.next) { 
                current = current.next; 
            }
            current.next = node; 
        } 
        this.size++; 
    }
    //function to remove any given element 
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
            str += curr.element + " "; 
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
            // compare each element of the list 
            // with given element 
            if (current.element === element) {
                return 'Element Found in '+ count + ' Position'; 
            }
            count++; 
            current = current.next; 
        } 
        // not found 
        return false; 
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
            } else { 
                while (iterator < index) { 
                    iterator++; 
                    previous = current; 
                    current = current.next; 
                } 
                previous.next = current.next; 
            } 
            this.size--; 
            return current.element; 
        } 
    } 

} 


let list = new SingleLinkedList();

list.add(10);
list.add(20);
list.add(15);

console.log('value of the list after adding 2');

list.printList();


list.removeElement(10);

console.log('value of the list after removing 10');

list.printList();

list.insertAtIndex(30,1);

console.log('list after adding 30');

list.printList();

list.removeFromIndex(1);

console.log('list after removing 1st Index element');

list.printList();