class Node {
    constructor(key) {
        this.left = null;
        this.right = null;
        this.val = key;
    }
}

function isBST(node, min = null, max = null) {
    if (node === null) {
        return true;
    }

    if (min !== null && node.val <= min) {
        return false;
    }

    if (max !== null && node.val >= max) {
        return false;
    }

    return isBST(node.left, min, node.val) && isBST(node.right, node.val, max);
}

function isValidBST(root) {
    return isBST(root);
}

// Test
let root = new Node(4);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(3);

console.log(isValidBST(root)); // true

root.right.left = new Node(6);
console.log(isValidBST(root)); // false
