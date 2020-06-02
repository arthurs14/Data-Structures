const oddsOnly = (numbers) => {
  return numbers.filter(num => num % 2 !== 0);
};


console.log(oddsOnly([1,2,3,4,5,6,7])); // [1,3,5,7]
