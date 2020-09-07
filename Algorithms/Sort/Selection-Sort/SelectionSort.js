/*
* Similar to bubble sort, but instead of first
* placing large values into sorted position,
* it places small values into sorted position
*/

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // save index for value to check
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      // check every value after saved index 
      if (arr[j] < arr[min]) {
        // if new value is less than our min value save index
        min = j;
      }
    }
    if (i !== min) {
      // keep value of index
      let temp = arr[i];

      // set the index to its new min value
      arr[i] = arr[min];

      // set the index to its new value
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([33, 11, 22, 8, 10, 3, 40]));