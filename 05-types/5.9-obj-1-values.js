
'use strict';

function sumSalaries(salaries) {
  return Object.values(salaries).reduce((s, x) => (s + x), 0);
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( sumSalaries(salaries) ); // 650