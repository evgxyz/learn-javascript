
'use strict';

function sumInput() {
  let nums = [];

  while (true) {
    let x = prompt('Введите число', 0);
    if( x === null || x === '' || !isFinite(x) ) break;
    nums.push(+x);
  };

  let sum = 0;
  for (let x of nums) {
    sum += x;
  }

  return sum;
}

console.log('sum=' + sumInput());