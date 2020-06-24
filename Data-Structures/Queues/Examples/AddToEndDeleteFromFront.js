// create something similar to a queue where you add to the end
// but also remove from the front
// then return the removed value

let arr = [1,2,3,4,5];

const nextInLine = (arr, item) => {
  // add to the end of line/ array
  arr.push(item); // [1,2,3,4,5,item]


  // assign the first item in array and delete it
  item = arr.shift(); // 1

  return item; // 1
};

// should get return the value of the first value in array/ line
// Time Complexity: O(1)? -> you either push to the end or pick from the front?
// Space Complexity: O(1)? -> you always return a value from the same index?
console.log(nextInLine(arr, 7)); // 1
