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

  max = () => {
    let currentNode = this.root;

    while(currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.value;
  }

  contains = () => {

  }

  // depth first search
  // in-order
  dfsInOrder = () => {

  }

  // pre-order
  dfsPreOrder = () => {

  }

  // post-order
  dfsPostOrder = () => {

  }

  // breadth first search
  bfs = () => {

  }
}
