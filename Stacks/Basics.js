// STACK
// LIFO -> Last In First Out (think of stack of plates)
// Typical methods of stacks -> push, pop, peek


class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  // adds element to stack
  push(element) {
    this.size++;
    this.storage[this.size] = element; // at index add element
  }

  // delete element off the end of stack
  pop() {
    let removed = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return removed;
  }

  peek() {
    return this.storage[this.size]; // shows last element in stack
  }
}


const stack = new Stack();
stack.push('keyboard');
stack.push('mouse');
stack.push('microphone');

console.log(stack.pop()); // microphone

console.log(stack); // storage -> { '1': 'keyboard', '2': 'mouse' }
