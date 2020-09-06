/*
* A search that looks for a substring within a string
* and counts how many times it occurs
*/

const naiveSearch = (long, short) => {
  // count how many time substring appears in string
  let count = 0;

  // loop over long string
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      // continue looping over substring if it corresponds with long string
      if (short[j] !== long[i + j]) break;

      // increase count if substring matches corresponding string
      if (short.length - 1 === j) count++;
    }
  }
  return count;
}

console.log(naiveSearch('lorie loled', 'lol'));
console.log(naiveSearch('lorie loled', 'lo'));