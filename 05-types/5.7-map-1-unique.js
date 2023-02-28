
'use strict';

function unique(arr) {
    return Array.from(new Set(arr));
}
  
let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O" ];
  
console.log( unique(strings) );