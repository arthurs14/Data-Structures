// Priority Queue
// 1. Each element of the priority queue has an property associated with it
// 2. Elements are added to the queue as per the priority
// 3. Lowest priority elements are removed first

// Add elements to the queue according to the priority and remove them from the
// front of the queue.

// store element and its priority
class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

// where the elements will be saved
class PriorityQueue {
  constructor() {
    this.items = [];
  }

  // functions to be implemented
  // adds elements to the queue as per priority
  enqueue() {
    // create queue element
    let qElement = new QElement;
    let contain = false;

    // iterate through the entire item array to add element at the correct
    // location of the Queue
    for (let i = 0; this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        // once the correct location found -> add element
        //splice(start, delete, addItem)
        this.items.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }
    // if element is the highest priority
    // add to the end of the queue
    if(!contain) {
      this.items.push(qElement);
    }
  }

  // remove element from the queue
  dequeue() {
    // return deleted element and remove it
    // if queue empty -> erturn underflow?
    if (this.isEmpty()) {
      return "underflow";
    }
    return this.items.shift();
  }

  // returns the 0th element of the queue
  front() {
    // check if elements exists
    if (this.isEmpty()) {
      return 'No elements in queue';
    }
    return this.items[0];
  }

  // returns the last element of the queue
  rear() {
    if (this.isEmpty()) {
      return 'No elements in queue';
    }
    return this.items[this.items.lenght - 1];
  }

  // checks if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // prints elements of the queue by priority of highest to lowest
  printPQueue() {
    let str = '';
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i].element + ' ';
    }
    return str;
  }
}
