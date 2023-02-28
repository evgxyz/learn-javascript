
'use strict'

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function keySum(obj) {
  let s = 0;
  for (let key in obj) {
    s += Number(obj[key]);
  }
  return s;
}

console.log( keySum(salaries) );