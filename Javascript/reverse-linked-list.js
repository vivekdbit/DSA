/*
LeetCode
206. Reverse Linked List
Given the head of a singly linked list, reverse the list, and return the reversed list.
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
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
ll.add(1)
ll.add(2)
ll.add(3)
ll.add(4)
ll.add(5)
ll.printLL()
ll.reverse()
ll.printLL()

/***** OUTPUT ******
1->2->3->4->5->
Size: 4
5->4->3->2->1->
Size: 4
***** OUTPUT *******/