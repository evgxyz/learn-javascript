
'use strict';

function extractCurrencyValue(str) {
  return +str.match(/\-?\d+(\.\d+)?/)?.[0];
}

console.log( extractCurrencyValue('abc123hddj45') );