const oddsOnly = (numbers) => {
  return numbers.filter(num => num % 2 !== 0);
};

// time complexity: O(n) -> due to creating a new array of certain size
// space complexity: O(n) -> due to the size of the array changing
console.log(oddsOnly([1,2,3,4,5,6,7])); // [1,3,5,7]
