
'use strict';

function formatDate(date) {
  let diffms = new Date() - date; 

  if (diffms < 1000) { 
    return 'прямо сейчас';
  }

  let diffsec = Math.round(diffms / 1000);

  if (diffsec < 60) {
    return diffsec + ' сек. назад';
  }

  let diffmin = Math.round(diffsec / 60); 

  if (diffmin < 60) {
    return diffmin + ' мин. назад';
  }

  let 
    day = date.getDate().toString().padStart(2, '0'), 
    month = (date.getMonth() + 1).toString().padStart(2, '0'),   
    year =  date.getFullYear(),
    hours = date.getHours().toString().padStart(2, '0'), 
    min = date.getMinutes().toString().padStart(2, '0');
  
  return `${day}.${month}.${year} ${hours}:${min}`;
}

console.log( formatDate(new Date(new Date() - 86400 * 1000)) ); 