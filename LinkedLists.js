// PROS: insert and delete can be quick
// CONS: slow to get nth element O(n) linear time

// Data structure: { data: 100, next: { data: 200 } }


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
  getAt(index) {
    let current = this.head;
    let count = 0;

    while(current) {
      if(count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  // Remove at index
  removeAt(index) {
    // check if index is in range
    if(index > 0 && index > this.size) {
      return;
    }

    let current = this.head; // set current to first node
    let previous;
    let count = 0;

    // if index is first node
    if(index === 0) {
      this.head = current.next;
    } else {
      // if index is not first node
      while (count < index) {
        count++;
        previous = current; // sets previous to current node
        current = current.next; // moves current to next node
      }

      previous.next = current.next; // this sets the new node to where the old was
    }

    this.size--; // reduce size of linkedlist to reflect deletion
  }

  // Clear List
  clearList() {
    this.head = null; // by setting to null -> reference to list is gone
    this.size = 0; // set list size to 0
  }

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

// LL.removeAt(33);

LL.clearList();

LL.printListData();
// LL.getAt(0);
