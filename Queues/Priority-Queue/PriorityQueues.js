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
  enqueue(element, priority) {
    // create queue element
    let qElement = new QElement(element, priority);
    let contain = false;

    console.log('element:', qElement + " "  + qElement.priority);

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

    //console.log('queue:', this.items);

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
    // create empty string to hold queue
    let str = '';

    // loop through array to find elements and concatenate them to string
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i].element + ' ';
    }

    // returns the whole string of elements spaced out
    return str;
  }
}


// create object for queue class
let pq = new PriorityQueue();

// check that queue is empty prior to adding stuff
// console.log('Queue empty prior to adding:', pq.isEmpty());

// should return no elements in queue by checking font
// console.log('Queue empty from front:', pq.front());

// add elements to the queue
pq.enqueue('Stray Kids', 2);
pq.enqueue('Apink', 1);
pq.enqueue('Blackpink', 1);
pq.enqueue('Nature', 2);
// pq.enqueue('LOONA', 3);

// print the queue
console.log('queue:', pq.printPQueue());
