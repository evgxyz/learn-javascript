
'use strict'

async function funct() {
    let promise = new Promise((resolve, reject) => {
        //setTimeout(() => resolve("готово!"), 1000);
        setTimeout(() => reject("ошибка!"), 1000);
    });

    //let res = await promise;

    return 2;
}
  
funct().then( 
    (val) => console.log('funct.then: val='+val),
    (err) => console.log('funct.then: err='+err)
); // 1

console.log('after then');