/*
* Write a function called averagePair. Given a sorted pair of integers and a
* target average, determine if there is a pair of values in the array where the
* average of the pair equals the target average. There may be more than one
* pair that matches the average target.
*/

const averagePair = (arr, targetAvg) => {
  // if array empty return false
  if (arr.length === 0) return false;

  let avg = 0;

  // set let and right
  let left = 0;
  let right = arr.length - 1;

  // loop while left index is less than right index
  while (left < right) {
    // find the average of two values
    console.log(`adding ${arr[left]} + ${arr[right]}`);
    avg = (arr[left] + arr[right]) / 2;

    // if avg matches targetAvg then we can return true
    if (avg === targetAvg) {
      return true;
    }
    // if avg is lower then  move left up one
    else if (avg < targetAvg) {
      left++;
    }
    // if avg is higher then move right down one
    else {
      right--;
    }
  }

  return false;
};

// console.log(averagePair([1,2,3], 2.5)); // true
console.log(averagePair([1,3,3,4,5,6,7,10,12,19], 8)); // true
// console.log(averagePair([-1,0,3,4,5,6], 4.1)); // false
// console.log(averagePair([], 4)); // false
