const bubbleSort = (arr) => {
  let noSwaps;
  for (let i = 0; i < arr.length; i++) {
    noSwaps = true;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        // SWAP!
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
}

console.log(bubbleSort([37, 45, 29, 8]));