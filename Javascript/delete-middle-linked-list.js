/*
LeetCode
2095. Delete the Middle Node of a Linked List
You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
*/

var deleteMiddle = function(head) {
    let prev = null
    let fast = head
    let slow = head

    // only single element in the list
    if (head.next == null) {
        head = null
        return head
    }

    // get middle element
    while (fast && fast.next) {
        prev = slow
        slow = slow.next
        fast = fast.next
    }

    // delete element
    if(prev == null) {
        head = slow.next
    } else {
        prev.next = slow.next
    }
    return head
}

