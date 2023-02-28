
'use strict';

function getDateAgo(date, days) {
    let dateTmp = new Date(date);
    dateTmp.setDate(dateTmp.getDate() - days);
    return dateTmp.getDate();
}
  
let date = new Date(2015, 0, 2);

console.log( getDateAgo(date, 2) ); 