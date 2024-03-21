// Preorder

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.idx = -1;
    }

    buildTree(nodes) {
        this.idx++;
        if (nodes[this.idx] === -1) {
            return null;
        }
        const newNode = new Node(nodes[this.idx]);
        newNode.left = this.buildTree(nodes);
        newNode.right = this.buildTree(nodes);
        return newNode;
    }

    preOrder(root) {

        if(root == null) {
            return
        }
        console.log(root.data)
        this.preOrder(root.left)
        this.preOrder(root.right)
    }

    inOrder(root){

        if(root == null ) {
            return
        }

        this.inOrder(root.left)
        console.log(root.data)
        this.inOrder(root.right)
    }

    postOrder(root){

        if(root == null) {
            return
        }

        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.data)
    }
}

const nodes = [10, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];
const tree = new BinaryTree();

const root = tree.buildTree(nodes);
console.log(root.data);
console.log("------PreOrder------");
tree.preOrder(root)
console.log("------InOrder------");
tree.inOrder(root)
console.log("------PostOrder------");
tree.postOrder(root) 