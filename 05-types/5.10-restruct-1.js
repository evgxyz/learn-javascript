
'use strict';

let user = { uname: "John", years: 30 };

let { uname: uname, years: age, isAdmin: isAdmin = false } = user;

console.log( uname ); // John
console.log( age ); // 30
console.log( isAdmin ); // false