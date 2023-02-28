
'use strict';

function checkSpam(str) {
  let patterns = ['viagra', 'XXX'];
  let lowStr = str.toLowerCase();
  for (let patt of patterns) {
    if (lowStr.includes( patt.toLowerCase() )) return true;
  }
  return false;
}

console.log( checkSpam('buy ViAgRA now') );
console.log( checkSpam('free xxxxx') );
console.log( checkSpam("innocent rabbit") );