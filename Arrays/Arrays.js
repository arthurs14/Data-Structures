class Array {
  constructor () {
    // store the length of array
    this.length = 0;
    // object to store elements
    this.data = {};
  }

  // pushes new element to end of array
  push = (element) => {
    // get length to add element at said index
    this.data[this.length] = element;

    // increase length by 1
    this.length++;
    return this.data;
  }

  // takes element at the end of array
  pop = () => {
    // set item to last element of array
    const item = this.data[this.length - 1];

    // delete item
    delete this.data[this.length - 1];

    // reduce length by 1
    this.length--;

    return this.data;
  }

  // inserts element at certain index
  insertAt = (index, item) => {
    // loop until it reaches index to modify
    for (let i = this.length; i >= index; i--) {
      // sets a new length to the object while opening the modified index
      this.data[i] = this.data[i - 1];
    }

    // add value to empty index
    this.data[index] = item;

    // increase length
    this.length++;

    return this.data;
  }

  // deletes element at the certain index
  deleteAt = () => {

  }

  // return element at index
  getElementAtIndex = () => {

  }
}
