
'use strict'

// свой метод Promise.allSettled

if (!Promise.allMySettled) {
    Promise.allMySettled = function(promises) {
        return Promise.all(
            promises.map(
                p => Promise.resolve(p).then(
                    value => ({status: 'fulfilled', value: value}), 
                    error => ({status: 'rejected', reason: error})
                )
            )
        );
    };
}

let urls = [
    'https://api.github.com/users/iliakan',
    'https://no-such-url',
    'https://api.github.com/users/remy',
];

Promise.allMySettled(urls.map(url => fetch(url)))
    .then(results => {
        results.forEach((result, num) => {
            if (result.status == "fulfilled") {
                console.log(`${urls[num]}: ${result.value.status}`);
            } else
            if (result.status == "rejected") {
                console.log(`${urls[num]}: ${result.reason}`);
            }
        });
    });
