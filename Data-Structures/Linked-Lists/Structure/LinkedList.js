// PROS: insert and delete can be quick
// CONS: slow to get nth element O(n) linear time

// Data structure: { data: 100, next: { data: 200 } }


// Example //
class Node {
  constructor (data, next = null) {
    this.data = data;
    this.next = next;
    // creates an object { data: data, next: null }
  }
}

class LinkedList {
  constructor() {
    this.head = null; // list is empty
    this.size = 0; // zero by default
  }

  // Insert first node
  // If other nodes exists, it will put in front
  insertFirst(data) {
    // set the head of the list with the new data along with the old data
    // increase linkedlist size
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  // Puts node at the end of the list
  insertLast(data) {
    // create a node for new data
    let node = new Node(data);
    let current;

    // If empty, make it the head
    if(!this.head) {
      this.head = node;
    } else {
      // if head node exists, set current to head
      current = this.head;

      // traverse the list
      while(current.next) {
        current = current.next;
      }

      // once you leave the while loop -> should be at end of list
      // add the new node
      current.next = node;
    }

    // increase the linkedlist
    this.size++;
  }

  // Insert at index
  insertAt(data, index) {
    // check if index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // if first index (0)
    if(index === 0) {
      this.insertFirst(data);
      return;
    }

    // if index is not 0 but within linkedlist size
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

    node.next = current; // push current up 1
    previous.next = node; // add new node to what current was at
    this.size++;
  }

  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    // traverse list
    while(current) {
      if(count === index) {
        console.log(current.data); // show value at index
      }
      count++; // increase until index reached
      current = current.next; // keep assigning until current no longer exists
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

// LL.clearList();

LL.printListData();
// LL.getAt(0);
