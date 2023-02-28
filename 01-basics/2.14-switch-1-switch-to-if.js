
'use strict'

let browser = 'Firefox';
let msg = '';

if(browser == 'Edge') {
  msg = "You've got the Edge!";
} 
else 
if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
  msg = 'Okay we support these browsers too';
} 
else {
  msg = 'We hope that this page looks ok!';
}

console.log(msg); 