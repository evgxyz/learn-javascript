
'use strict';

function copySorted(arr) {
    return [...arr].sort();
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted_arr = copySorted(arr);

console.log(sorted_arr);
console.log(arr);


