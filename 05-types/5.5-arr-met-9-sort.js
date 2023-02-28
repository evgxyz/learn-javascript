
'use strict';

function sortByAge(arr) {
    arr.sort( (x, y) => x.age - y.age );
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let tanya = { name: "Таня", age: 20 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, tanya, masha ];

sortByAge(arr);

for (let x of arr) {
    console.log(x);
}