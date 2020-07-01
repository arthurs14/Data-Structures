/*
* Implement a function called countUniqueValues, which accepts a sorted array,
* and counts the unique values in the array. There can be negative numbers in
* the array, but it will always be sorted.
*/

const countUniqueValues = (arr) => {
  // return 0 if arr has 0 vales
  if (arr.length === 0) {
    return 0;
  }
  // set a counter that adds when a new unique value is found
  let count = 0;

  // set a temporary unique value to check
  let value = 0;

  // Loop through arr to find unique values
  for (let i = 0; i < arr.length; i++) {
    // if value does not equal the value in the array set it to that new value
    // also increase count by 1 to indicate its a unique value
    // keep checking throughout the array to see if there are other unique numbers
    if (value !== arr[i]) {
      value = arr[i];
      count++;
    }
  }

  return count;
};

console.log(countUniqueValues([1,1,1,1,1,2])); // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2,-1,-1,0,1])); // 4
