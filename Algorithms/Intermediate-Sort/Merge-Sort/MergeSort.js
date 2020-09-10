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
  let arrLength = 0;
  let arrCount = 0;

  console.log(arr1.length);

  while (arrLength <= arr1.length - 1) {
    if (arr1[arrLength] < arr2[arrCount]) {
      arr.push(arr1[arrLength]);
      arrLength++;
    }

    if (arr1[arrLength] > arr2[arrCount]) {
      arr.push(arr2[arrCount]);
      arrCount++;
    }

    arr.push(arr2[arrCount]);
    arrCount++;
  }

  return arr;
}

console.log(MergeArrays([1, 10, 50], [2, 14, 99, 100]));