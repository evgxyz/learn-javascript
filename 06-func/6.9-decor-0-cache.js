
'use strict'

let worker = {
    slow(min, max) {
        console.log(`slow called with ${min},${max}`);
        return min + max;
    }
};

function cachingDecorator(func, hash) {
    let cache = new Map();
    return function(...args) {
        let key = hash(args); // (*)
        if (cache.has(key)) {
            console.log(`from cache for key=${key}`);
            return cache.get(key);
        }

        let result = func.call(this, ...args); // (**)

        cache.set(key, result);
        return result;
    };
}

function hash(args) {
    return args.reduce((str, arg) => (str + (str != '' ? ',' : '') + String(arg)), '');
}

worker.slow = cachingDecorator(worker.slow, hash);

console.log( worker.slow(3, 5) ); // работает
console.log( "Again " + worker.slow(3, 5) ); // аналогично (из кеша)
