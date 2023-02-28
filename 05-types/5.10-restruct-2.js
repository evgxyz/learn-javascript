
'use strict';

function topSalary(salaries) {
    let [maxName, maxSalary] = [null, -Infinity];
    for (let [name, salary] of Object.entries(salaries) ) {
        if (salary > maxSalary) {
            [maxName, maxSalary] = [name, salary];
        }
    }
    return maxName;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log( topSalary(salaries) ); 