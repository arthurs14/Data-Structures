// Two essential parts of a recursive function:
// 1. Base Case -> what stops the recursion
// 2. Different Input -> call the same function over and over, different data

/*
* Pure Recursin Tips:
* arrays -> use slice, the spread operator, and concat to not mutate arrays
* strings are immutable -> slice, substr, or substring
* copies of objects -> Object.assign, spread operator
*/


// simple coutdown function
const countDown = num => {
  if (num <= 0) {
    console.log('All Done!');
    return;
  }

  console.log(num);
  num--;
  countDown(num);
};

// adds all the numbers in a certain range
const sumRange = num => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

// Factorial
const factorial = num => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
};

// countDown Example
// coundtDown(5);

// sumRange Example:
// console.log(sumRange(4));

// factorial Example:
console.log(factorial(3));
