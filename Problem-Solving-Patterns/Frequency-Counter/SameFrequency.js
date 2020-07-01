/*
* Write a function called sameFrequency. Given two positive integers, find out
* if the two numbers have the same frequency of digits. Your solution MUST have
* the following complexities: Time: O(N).
*/

const sameFrequency = (num1, num2) => {
  // check to see if there are negative numbers and return false
  if (num1 < 0 || num2 < 0) return false;

  // convert numbers to strings to iterate over them
  const num1ToString = num1.toString();
  const num2ToString = num2.toString();

  // create a frequency for one of the numbers;
  let num1Frequency = {}

  // loop over one string and fill object with frequencies
  for (let i = 0; i < num1ToString.length; i++) {
    num1Frequency[num1ToString[i]] ? num1Frequency[num1ToString[i]]++ : num1Frequency[num1ToString[i]] = 1;
  }

  console.log(num1Frequency);
};

sameFrequency(182, 281);
// console.log(sameFrequency(182, 281)); // true
// console.log(sameFrequency(34,14)); // false
// console.log(sameFrequency(3589578, 5879385)); // true
// console.log(sameFrequency(22,222)); // false

// console.log(sameFrequency(-1, 3));
// console.log(sameFrequency(1, -3));
