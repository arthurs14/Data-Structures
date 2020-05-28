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
  enqueue = () => {
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
  dequeue = () => {
    // return deleted element and remove it
    // if queue empty -> erturn underflow?
    if (this.isEmpty()) {
      return "underflow";
    }
    return this.items.shift();
  }
  
  // front()
  // isEmpty()
  // printPQueue()
}
