class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function countOfNodes(root) {

    if(root == null ) return 0

    let leftCount = countOfNodes(root.left)
    let rightCount = countOfNodes(root.right)

    return leftCount + rightCount + 1
}

// Creating a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log("----- Count -----")
const count = countOfNodes(root)
console.log(count)

/***** OUTPUT ******
----- Count -----
7
****** OUTPUT ******/