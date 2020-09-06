/*
* A search that looks for a substring within a string
* and counts how many times it occurs
*/

const naiveSearch = (long, short) => {
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      console.log(long[i], short[j]);
      if (short[j] !== long[i + j]) {
        console.log('BREAK!');
        break;
      }

    }
  }
}


naiveSearch('lorie loled', 'lol');

// console.log(naiveSearch('lorie loled', 'lol'));