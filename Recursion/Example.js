// Two essential parts of a recursive function:
// 1. Base Case -> what stops the recursion
// 2. Different Input -> call the same function over and over, different data

const countDown = num => {
  if (num <= 0) {
    console.log('All Done!');
    return;
  }

  console.log(num);
  num--;
  countDown(num);
};

countDown(5);
