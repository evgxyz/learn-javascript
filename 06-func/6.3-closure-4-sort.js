
'use strict'

function byField(field) {
    return function (a, b) {
        if (a[field] > b[field]) return 1;
        if (a[field] < b[field]) return -1;
        return 0;
    }
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort(byField('name'));
console.log('sort by name:')
users.forEach(x => console.log(x)); 

users.sort(byField('age'));
console.log('sort by age:')
users.forEach(x => console.log(x));  
