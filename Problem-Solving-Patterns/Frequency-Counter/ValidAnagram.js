/*
* Given two strings, write a function to determine if the second string is an
* anagram of the first. An anagram is a word, phrase, or name formed by
* rearranging the letters of another, such as cinema, formed from iceman.
*/


function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  // store strings into objects
  let strCountOne = {};
  let strCountTwo = {};

  // loop through str1 and put into object
  for (let char in str1) {
    strCountOne[str1[char]] ? strCountOne[str1[char]]++ : strCountOne[str1[char]] = 1;
  }

  // loop through str2 and put into object
  for (let char in str2) {
    strCountTwo[str2[char]] ? strCountTwo[str2[char]]++ : strCountTwo[str2[char]] = 1;
  }

  // check if character exists in str2
  for (let key in strCountOne) {
    if (!(key in strCountTwo) && strCountOne[key] !== strCountTwo[key]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram(' ', ' ')); // true
console.log(validAnagram('aaz', 'zza')); // true
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true
