
'use strict';

function getLocalDay(date) {
    let d = date.getDay();
    if (d == 0) d = 7;
    return d;
}
  
let date = new Date(2012, 0, 1); 

console.log( getLocalDay(date) ); 