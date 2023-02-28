
'use strict';

function aclean(arr) {
  let map = new Map();

  for (let str of arr) {
    let key = Array.from(str.toLowerCase()).sort().join('');
    if (!map.has(key))
      map.set(key, str);
  }

  return Array.from(map.values());
}
  
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
console.log( aclean(arr) );