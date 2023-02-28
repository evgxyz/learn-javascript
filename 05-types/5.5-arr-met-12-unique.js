
'use strict';

function unique(arr) {
    let res = [];
    for (let x of arr) {
        if (!res.includes(x)) res.push(x);
    }
    return res;
}
  
let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O" ];
  
console.log( unique(strings) );