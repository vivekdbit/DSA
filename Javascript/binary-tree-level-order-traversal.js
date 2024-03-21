class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function levelOrderTraversal(root) {
    if (!root) return; // If the root is null, return immediately
    
    const queue = []; // Create a queue to store nodes
    queue.push(root); // Enqueue the root node
    const result = [];

    while (queue.length) { // While the queue is not empty

        const levelSize = queue.length;
        const currentLevel = [];
        
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift(); // Dequeue the front node
            currentLevel.push(currentNode.data);
            
            if (currentNode.left) { // If the dequeued node has a left child
                queue.push(currentNode.left); // Enqueue the left child
            }
            if (currentNode.right) { // If the dequeued node has a right child
                queue.push(currentNode.right); // Enqueue the right child
            } 
        }
        
        result.push(currentLevel);
    }

    return result
}

// Creating a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Performing level order traversal
const result = levelOrderTraversal(root);
console.log(result);

/***** OUTPUT ******
[ [ 1 ], [ 2, 3 ], [ 4, 5, 6, 7 ] ]
****** OUTPUT ******/