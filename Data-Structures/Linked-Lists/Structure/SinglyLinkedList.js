class Node {
  constructor(val) {
    this.val = data;
    this.next = null;
    // creates an object { data: data, next: null }
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push to end of linked list
  push(val) {
    let newNode = new Node(val);

    // if empty, make val the head
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // add val to end of tail and update val to be the new tail
      this.tail.next = newNode;
      this.tail = newNode;
    }

    // increase length by 1
    this.length++;
  }
}