
'use strict';

function readNumber() {
  let num;

  do {
    num = prompt('Введите число', 0);
  } 
  while ( num && !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

let x = readNumber();
console.log('x=' + x);