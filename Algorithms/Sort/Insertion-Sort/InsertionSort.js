const insertionSort = (arr) => {
  // moves through array starting at index 1
  for (let i = 1; i < arr.length; i++) {
    // set currentval like a temporary value that will be used to either
    // move value to new index and to also be used as a conditional
    let currentVal = arr[i];

    // set index for the value before current value
    let j = i - 1;

    // loop backwards through array below current value to check if its needs to be swapped
    while (j >= 0 && arr[j] > currentVal) {
      // if value below current value is greater than we need to move it up an index
      arr[j + 1] = arr[j];

      // increment down to check each value below current value to see if its still greater than
      // helps to find where to put value in correct order
      j--;
    }

    // place value at its current position if value below is not greater than
    // basically value was already in the correct spot perhaps
    arr[j + 1] = currentVal;
  }
  return arr;
}


console.log(insertionSort([2, 1, 9, 76, 4]));