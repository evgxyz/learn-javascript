
'use strict';

function countKeys(obj) {
  return Object.keys(obj).length;
}

let user = {
  firstname: 'John',
  lastname: 'Smith',
  age: 30,
};

console.log( countKeys(user) ); 