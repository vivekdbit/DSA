/*
Design and implement a Linked List data structure.
*/

// Define node class
class Node {
    
    constructor(data) {
        this.data = data
        this.next = null
    }
}

// Define linked list class
class LinkedList {

    constructor() {
        this.head = null
        this.size = 0
    }

    // Add element to list
    add(data){

        //  new node
        const newNode = new Node(data)

        // If the list is empty, add element and make it head
        if(this.head == null) {
            this.head = newNode
        } else {
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = newNode
        }
        this.size++
    }

    // Insert at given index
    insertAt(data, index){

        // Validate index
        if(index < 0 || index > this.size) {
            console.log(`Invalid Index ${index}`);
            return
        }

        let prev = this.head
        const newNode = new Node(data)

        // Adding at 0th Index
        if(index == 0) {
            newNode.next = this.head;
            this.head = newNode;
        }

        for(let i=0; i < index; i++) {
            prev = prev.next
        }
        
        newNode.next = prev.next
        prev.next = newNode
    }

    // Delete from given index
    deleteAt(index){

        // Check invalid index
        if(index < 0 || index > this.size) {
            console.log(`Invalid index ${ index }`);
        }

        let prev = this.head
        if(index == 0) {
            this.head = this.head.next
        } else {
            for(let i = 0; i < index; i++){
                prev = prev.next
            }
            prev.next = prev.next.next
        }
        this.size--
    }

    // Print linked list
    printLL(){

        let current = this.head
        let str = ""

        while(current) {
            str += current.data + "->"
            current = current.next
        }
        console.log(str);
        console.log(`Size: ${ this.size }`);
    }
}

// Create a new linked list
const ll = new LinkedList();
ll.add(10)
ll.add(20)
ll.add(30)
ll.printLL()
ll.insertAt(100,0)
ll.printLL()
ll.insertAt(200,4)
ll.insertAt(200,-1)
ll.deleteAt(0)
ll.printLL()

/***** OUTPUT ******
10->20->30->
Size: 3
100->20->30->
Size: 3
Invalid Index 4
Invalid Index -1
20->30->
Size: 2
***** OUTPUT *******/