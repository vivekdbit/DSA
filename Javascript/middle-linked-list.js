/*
LeetCode
876. Middle of the Linked List
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
*/
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

    // Middle of the linked list
    middle(){

        let slow = this.head
        let fast = this.head

        while(fast && fast.next) {
            // move slow by 1
            slow = slow.next;

            // move fast by 2
            fast = fast.next.next;
        }
        return slow
    }
}
