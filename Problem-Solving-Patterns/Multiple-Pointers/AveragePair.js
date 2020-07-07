/*
* Write a function called averagePair. Given a sorted pair of integers and a
* target average, determine if there is a pair of values in the array where the
* average of the pair equals the target average. There may be more than one
* pair that matches the average target.
*/

const averagePair = (arr, targetAvg) => {
  // if array empty return false
  if (arr.length === 0) return false;

  // store average of two numbers
  let avg = 0;

  // loop while array still has two values to add
  while (arr.length >= 2) {
    // find the average of two values
    avg = (arr[0] + arr[1]) / 2;
    // remove first value
    arr.shift();
    // if avg matches targetAvg then we can return true
    if (avg === targetAvg) return true;
  }

  return false;
};

// console.log(averagePair([1,2,3], 2.5)); // true
// console.log(averagePair([1,3,3,4,5,6,7,10,12,19], 8)); // false
console.log(averagePair([-1,0,3,4,5,6], 4.1)); // false
// console.log(averagePair([], 4)); // false
