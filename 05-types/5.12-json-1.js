
'use strict';

let user = {
  name: "Василий Иванович",
  age: 35
};

let userJson = JSON.stringify(user);

console.log(userJson);

let user2 = JSON.parse(userJson);

console.log(user2);