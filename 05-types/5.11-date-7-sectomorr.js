
'use strict';

function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1); 
    let diffms = tomorrow - now; 
    return Math.round(diffms / 1000); 
  }

console.log( getSecondsToTomorrow() ); 