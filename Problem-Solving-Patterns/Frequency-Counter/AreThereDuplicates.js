/*
* Implement a function called, areThereDuplicates which accepts a variable
* number of arguments, and checks whether there are any duplicates among the
* arguments passed in.
*/

const areThereDuplicates = (...values) => {
  // check if array of values is empty
  if (values.length === 0) return false;

  console.log('values', values);

  // temporary item place holder
  let value;

  // loop through array to create a frequency table
  // values.forEach(item => {
  //   if (item !== value) {
  //     console.log('item', item);
  //     value = item;
  //     console.log('value', value);
  //   } else if (item === value) {
  //     return true;
  //   }
  //   return false;
  // });

  for (let i = 0; i < values.length; i++) {
    if (values[i] !== value) {
      value = values[i];
    } else if (values[i] === value) {
      return true;
    }
  }
  return false;
};

console.log(areThereDuplicates(1,2,3)); // false
console.log(areThereDuplicates(1,2,2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'd')); // false
