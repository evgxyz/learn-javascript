
'use strict';

function getAverageAge(arr) {
    return arr.reduce( (acc, x, i, arr) => (acc + x.age), 0)/arr.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let tanya = { name: "Таня", age: 20 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, tanya, masha ];

console.log('Average age: ' + getAverageAge(users));