class stack {
    constructor() {
        this.items = [];
    }

    push(ele) {
        return this.items.push(ele);
    }
    
    pop()
    {
        if(this.items.length === 0) {
            return "Empty Array Nothing to Pop"
        }
        return this.items.pop();
    }

    peek() {
        console.log(this.items[this.items.length-1]);
    }

    printStack() {
        let op = '';
        for ( let i=0; i<this.items.length; i++)
            op+= this.items[i]+ ' '
        console.log(op)
    }
}

let stackArray = new stack();

stackArray.push(10);
stackArray.push(20);
stackArray.push(30);

console.log('After adding new elements');

stackArray.printStack()

stackArray.pop();
console.log('pop an element');

stackArray.printStack()

console.log('top element');

stackArray.peek();