
'use strict';

function getSecondsToday() {
    let now = new Date();
    let startday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diffms = now - startday; 
    return Math.round(diffms / 1000); 
  }

console.log( getSecondsToday() ); 