/*
* Given an array of integers and a number, write a function called
* maxSubarraySum, which finds the maximum of a subarray with the length of the
* number passed to the function.
*
* Note that a subarray must consist of consecutive elements from the original
* array. In the first example below, [100,200,300] is a subarray of the original
* array, but [100,300] is not.
*/

const maxSubarraySum = (arr, num) => {
  // set maxSum and tempSum
  let maxSum = 0;
  let tempSum = 0;

  // check to see if array is long enough for further test
  if (arr.length < num ) return null;

  // get the first sum
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  // set tempSum to maxSum
  tempSum = maxSum;

  // loop through the rest of the array where the index is left off from first
  // sum
  for (let i = num; i < arr.length; i++) {
    // subract the leading index from the total then add the new value
    tempSum = tempSum - arr[i - num] + arr[i];

    // then find the max of the new sum
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};

console.log(maxSubarraySum([100,200,300,400], 2)); // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)); // 39
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)); // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2)); // 5
console.log(maxSubarraySum([2,3], 3)); // null
