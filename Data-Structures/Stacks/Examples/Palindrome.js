// Check to see if a word is a palindrome

const palindrome = (word) => {
  // fill stack with an array of chars of the word
  const stack = word.split('');

  // create a variable to store reversed word
  let reversedWord = '';

  // Loop through stack to recreate the word backwards
  while (stack.length !== 0) {
    const char = stack.pop();
    reversedWord += char;
  }

  // if word matches reversed word then its a palindrome
  return word === reversedWord;
};

// Time Complexity: O(1)? -> as you take a value and decrease it always ends at 0?
// Space Complexity: O(n) -> strings of same length for checking?
console.log(palindrome('solos')); // true
console.log(palindrome('timmy')); // false
console.log(palindrome('tot')); // true
