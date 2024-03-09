/*
Reverse a Linked List
*/
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

    // Reverse the linked list
    reverse(){

        let prev = null
        let current = this.head

        while(current) {
            // have temp so next list will not get lost
            let temp = current.next

            // breaking current linkage and pointing currents next to prev
            current.next = prev

            // shifting previous to next
            prev = current

            // shifting current to next
            current = temp
        }
        this.head = prev
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
ll.add(40)
ll.printLL()
ll.reverse()
ll.printLL()

/***** OUTPUT ******
10->20->30->40->
Size: 4
40->30->20->10->
Size: 4
***** OUTPUT *******/