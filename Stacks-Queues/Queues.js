// QUEUE
// FIFO -> First In, First Out
// Linear Data Structure
// Methods -> Enqueue (push()), Dequeue (shift())

class Queue {
  storage = {};
  head = 0;
  tail = 0;

  // add element to storage by the tail
  enqueue = (element) => {
    this.storage[this.tail] = element;
    this.tail++;
  }

  // remove element from head of storage
  dequeue = () => {
    let removed = this.storage[this.head];
    delete this.storage[this.head]; // deletes element
    this.head++; // move head up to next key:value pair
    return removed;
  }
}

const queue = new Queue();
queue.enqueue('water');
queue.enqueue('milk tea');
queue.enqueue('lemonade');

console.log(queue.storage); // shows storage
console.log(queue.dequeue()); // should see 'water'
console.log(queue.storage);
