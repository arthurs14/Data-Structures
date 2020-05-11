// PROS: insert and delete can be quick
// CONS: slow to get nth element O(n) linear time

// Bare Bones Example //
/*
const n1 = {
  data: 100,
};

const n2 = {
  data: 200,
};

n1.next = n2;

// { data: 100, next: { data: 200 } }
// console.log(n1);
*/

// Example //
class Node {
  constructor (data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // list is empty
    this.size = 0; // zero by default
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // If empty, make head
    if(!this.head) {
      this.head = node;
    } else {
      // if head exists
      current = this.head;

      while(current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  // Insert at index
  insertAt(data, index) {
    //if index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // if first index (0)
    if(index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;
    // set current to first
    current = this.head;
    let count = 0;

    while(count < index) {
      previous = current; // node before index
      count++;
      current = current.next; // node after index
    }

    node.next = current;
    previous.next = node;
    this.size++;
  }

  // Get at index

  // Remove at index

  // Clear List

  // Print list data
  printListData() {
    let current = this.head; // current node

    // loop through nodes
    while(current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const LL = new LinkedList();
LL.insertFirst(100);
LL.insertFirst(200);
LL.insertFirst(300);
LL.insertLast(400);
LL.insertAt(500, 10);
LL.printListData();
