// Binary Search Tree
// Fast At: insertion, deletion, accessing any element,
// naturally stay sorted

class Node {
  constructor () {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value); // the top of the tree
    this.count = 0; // how many nodes are in the tree
  }

  // gets the amount of nodes in the tree
  size = () => {
    return this.count;
  }

  // adds the value to the tree
  insert = (value) => {
    this.count++;

    let newNode = new Node(value);

    const searchTree = node => {
      // if value < node.value, go left
      if (value < node.value) {
        // if no left child, append new node
        if (!node.left) {
          node.left = newNode;
        } else {
          // if left child, look left again
          searchTree(node.left);
        }
      } else if (value > node.value) {
        // if value > node.value go right
        // if no right child, append new node
        if(!node.right) {
          node.right = newNode;
        } else {
          // if right child, look right again
          searchTree(node.right);
        }
      }

      searchTree(this.root);
    }
  }

  // to find the minimum start at root and go left until you reach the lowest
  // value
  min = () => {
    let currentNode = this.root; // start at top of tree

    // while left child node exists
    while(currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }

  // to find max -> start at root and go right until you reach the max value
  max = () => {
    // start at root of tree
    let currentNode = this.root;

    // loop until you reach the right most value
    while(currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.value;
  }

  // takes a value to check to see if value exists in the tree
  contains = (value) => {
    let currentNode = this.root;

    while(currentNode) {
      // if current node equals value return true
      if (value === currentNode.value) {
        return true;
      }

      // if value is less than current go left
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        // if value is more than current go left
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  // depth first search - branch by branch
  // in-order
  // left, root, right
  // 2, 3, 12, 15, 28, 36, 39
  dfsInOrder = () => {

  }

  // pre-order
  // root -> left -> right
  // 15, 3, 2, 12, 36, 28, 39
  dfsPreOrder = () => {

  }

  // post-order
  // left, right, root
  // 2, 12, 3, 28, 39, 36, 15
  dfsPostOrder = () => {

  }

  // breadth first search - level by level
  // use queue
  // 15, 3, 36, 2, 12, 28, 39
  bfs = () => {

  }
}
