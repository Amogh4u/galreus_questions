
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
    
    reverseLinkedList() {
        var node = this.head;
        var previous = null;
        while(node) {
            var save = node.next;
            node.next = previous;
            previous = node;
            node = save;
        }
        this.head = previous;
        return previous; 
    }
}

let list = new SingleLinkedList();

list.add(10);
list.add(20);
list.add(15);


console.log('value of the list after adding 2');

list.printList();

list.reverseLinkedList()

console.log('reverse of linked list')

list.printList();