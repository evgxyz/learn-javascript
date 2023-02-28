
'use strict';

function filterRangeInPlace(arr, a, b) {
    let arr1 = arr.filter( x => (a <= x && x <= b) );
    arr.splice(0, arr.length, ...arr1);
    /* 
    arr.length = 0;
    arr.push(...arr1); 
    */
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr);

