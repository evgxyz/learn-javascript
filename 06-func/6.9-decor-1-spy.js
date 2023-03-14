
'use strict'

function spy(func) {

    function f(...args) {
        f.calls.push([...args]);
        return func.call(this, ...args);
    }

    f.calls = [];

    return f;
}

function work(a, b) {
    console.log(a + b); // произвольная функция или метод
}
  
work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log( 'call:' + args.join(',') );
}
