/*
* Write a functino called binarySerach which accepts a sorted array and a value
* and returns the index at which the value exists. Otherwise, return -1.
*/

const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  let center = Math.floor((left + right) / 2);

  while (arr[center] !== val && left <= right) {
    if (val < arr[center]) {
      right = center - 1;
    } else {
      left = center + 1;
    }
    center = Math.floor((left + right) / 2);
  }

  return arr[center] === val ? middle : -1;
};

console.log(binarySearch([1,2,3,4,5], 2)); // 1
console.log(binarySearch([1,2,3,4,5], 3)); // 2
console.log(binarySearch([1,2,3,4,5], 5)); // 4
console.log(binarySearch([1,2,3,4,5,6])); // -1
