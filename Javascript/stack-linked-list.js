/*
    Design and implement Stack using Linked List data structure.
*/

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Stack{

    constructor(){
        this.head = null
        this.size = -1
    }

    push(element){
        const newNode = new Node(element)
        newNode.next = this.head
        this.head = newNode
        this.size++
    }

    pop(){
        if(this.size == -1) {
            console.log("Stack underflow");
            return
        }
        let temp = this.head.data
        this.head = this.head.next
        this.size--
        return temp
    }

    peek(){
        if(this.size == -1) {
            console.log("Stack underflow");
            return
        }
        return this.head.data
    }

    printStack(){
        let str = ""
        if(this.size == -1) {
            console.log("Stack underflow");
            return
        }
        let current = this.head
        while(current){
            str += current.data + "->";
            current = current.next
        }
        console.log(str);
        console.log(this.size);

    }
}

const st = new Stack();

st.push(1)
st.push(2)
st.push(3)
st.printStack()
console.log(st.peek())
st.pop()
st.printStack()

/***** OUTPUT ******
3->2->1->
2
3
2->1->
1
***** OUTPUT ******/