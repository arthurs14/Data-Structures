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

  for (const bracket in str) {
    if(open[bracket]) {
      stack.push(bracket);
    } else if(close[bracket]) {
      const ;
    }
  }
};

hasBalancedBrackets('[][(){}'); // false
hasBalancedBrackets('({)}'); // false
hasBalancedBrackets('({[]})'); // true
hasBalancedBrackets('text ( is allowed ){rwwrwrrww [] ()}'); // true
