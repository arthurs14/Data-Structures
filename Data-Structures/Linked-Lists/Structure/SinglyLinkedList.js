class Node {
  constructor(val) {
    this.val = val;
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

  // removes from the end of the list
  pop() {
    let current = this.head;
    let newTail = current;

    if (!this.head) return undefined;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current.val;
  }
}

let list = new SinglyLinkedList();
list.push('Hello');
list.push('Goodbye');
list.push('!');

console.log(list.pop());