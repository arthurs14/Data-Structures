const open = {
  '[': ']',
  '{': '}',
  '(': ')',
};

const close = {
  ']': '[',
  '}': '{',
  ')': '(',
};

const hasBalancedBrackets = (str) => {
  const stack = [];

  // loop through string
  for (const bracket of str) {
    // if bracket exists in object add to stack
    if (open.hasOwnProperty(bracket)) {
      stack.push(bracket);
    } else if (close.hasOwnProperty(bracket)) {
      // pop off stack and check if corresponding close bracket matches
      const openBracket = stack.pop();
      const closeBracket = open[openBracket]

      if (closeBracket !== bracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// Time Complexity: O(n) -> depends on the length of the string
// Space Complexity: O(1) -> it either has a length of 0 or more
console.log(hasBalancedBrackets('[][(){}')); // false
console.log(hasBalancedBrackets('({)}')); // false
console.log(hasBalancedBrackets('({[]})')); // true
console.log(hasBalancedBrackets('text ( is allowed ){rwwrwrrww [] ()}')); // true
