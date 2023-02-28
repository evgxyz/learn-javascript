
'use strict';

function getMaxSubSum(arr) {
  let maxs = -Infinity;
  let s = 0;
  for (let x of arr) {
    s += x;
    maxs = Math.max(s, maxs);
    if (s <= 0) s = 0;
  }

  return maxs;
}

let arr = [1, -2, 3, 4, -9, 6]; //[-1, 2, 3, -9]; //[-4, -2, -3];
console.log( 'maxs=' + getMaxSubSum(arr) );