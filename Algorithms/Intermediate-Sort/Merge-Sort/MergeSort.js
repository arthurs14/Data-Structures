/*
* Combination of merging and sorting
*
* Exploits the fact that arrays of 0 or 1 element are always sorted
*
* Works by decomposing array into small arrays of 0 or 1 elements,
* then building up a newly sorted array
*/

// Merge two arrays into one sorted array (least to greatest)
const MergeArrays = (arr1, arr2) => {
  let arr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    arr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    arr.push(arr2[j]);
    j++;
  }

  return arr;
}

console.log(MergeArrays([2, 14, 99, 100], [1, 10, 50]));