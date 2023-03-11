
'use strict'

async function funct() {
    let promise = new Promise((resolve, reject) => {
        //setTimeout(() => resolve("done!"), 1000);
        setTimeout(() => reject("error!"), 1000);
    });

    let result = await promise;

    return 1;
}
  
funct().then( 
    (val) => console.log('funct.then: val=' + val),
    (err) => console.log('funct.then: err=' + err)
); 

console.log('after then');