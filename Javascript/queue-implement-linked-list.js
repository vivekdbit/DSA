
class Node{

    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Queue{

    constructor(){
        //this.head = null
       // this.size = 0
        this.front = null
        this.rear = null
    }

    enqueue(data){

        const newNode = new Node(data);
        if (this.front == null) {
            this.front = newNode;
        } else {
            this.rear.next = newNode;
        }
        this.rear = newNode;
    }

    dequeue(){

        if(this.front == null) {
            console.log("empty queue")
            return
        }

        let temp = this.front.data
        this.front = this.front.next

        return temp
    }

    printQueue(){

        let currentNode = this.front;
        let str = "";
        while (currentNode) {
            str += currentNode.data + "-->";
            currentNode = currentNode.next;
        }
        console.log(str)
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.printQueue()

queue.dequeue();

queue.printQueue()