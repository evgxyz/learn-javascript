
'use strict'

let obj = {
    name: "obj",

    method(x) {
        console.log('method call with ' + x);
        console.log('this.name: ' + this.name);
    }
}

function delay(func, ms) {
    return function (...args) {
        let saveThis = this;
        setTimeout(() => func.call(saveThis, ...args), ms);
    }
}

function f(x) {
    console.log(x);
}

// создаём обёртки
let f1 = delay(f, 1000);
let f2 = delay(f, 1500);
obj.method = delay(obj.method, 2000);

f1("test1"); 
f2("test2");
obj.method('test3')