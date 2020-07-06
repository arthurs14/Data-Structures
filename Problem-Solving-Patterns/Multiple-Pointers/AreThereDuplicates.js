/*
* Implement a function called, areThereDuplicates which accepts a variable
* number of arguments, and checks whether there are any duplicates among the
* arguments passed in.
*/

const areThereDuplicates = (...values) => {
  // check if array of values is empty
  if (values.length === 0) return false;

  // temporary item place holder
  let value;

  for (let i = 0; i < values.length; i++) {
    // check if temporary value has a value
    if (values[i] !== value) {
      // make a temporary place to hold value
      value = values[i];
    } else if (values[i] === value) {
      // prior to having the temporary value being held if it already exists
      // it should indicate it already exists -> a duplicate!
      return true;
    }
  }

  return false;
};

console.log(areThereDuplicates(1,2,3)); // false
console.log(areThereDuplicates(1,2,2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'd')); // false
