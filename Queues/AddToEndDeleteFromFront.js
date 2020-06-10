// create something similar to a queue where you add to the end
// but also remove from the front

let arr = [1,2,3,4,5];

const nextInLine = (arr, item) => {
  // add to the end of line/ array
  arr.push(item); // [1,2,3,4,5,item]
};
