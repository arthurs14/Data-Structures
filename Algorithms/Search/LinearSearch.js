/*
* Create a function that accepts an array and a value. Check to see if the value
* exists in the array and return the index of that value. If it does not exist
* return -1
*/

const linearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
};

console.log(LinearSearch([1,2,3,4], 3)); // index: 2
console.log(LinearSearch([1,3,5,7,9], 7)); // index: 3
console.log(LinearSearch([2,4,6,8,10], 3)); // -1
console.log(LinearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log(LinearSearch([100], 100)); // 0

