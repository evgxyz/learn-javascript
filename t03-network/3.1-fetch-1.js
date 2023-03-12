
'use strict'

let names = [
    'iliakan',
    'no-such-url',
    'remy',
];

async function getUsers(names) {
    let tasks = names.map(name => 
        fetch( name != 'remy' ? `https://api.github.com/users/${name}` : 'https://ya.ru')
        .then(
            response => { 
                if (response.ok) {
                    return response.json()
                        .catch( err => { throw new Error('json error: ' + err); } ); 
                }
                else {
                    throw new Error('http error: ' + response.status);
                }
            }
        )
    );

    let results = await Promise.allSettled(tasks);
    return results.map((result, index) => {
        if (result.status == "fulfilled") {
            console.log(`fulfilled: ${names[index]}: ${result.value}`);
            return result.value;
        } else
        if (result.status == "rejected") {
            console.log(`rejected: ${names[index]}: ${result.reason}`);
            return null;
        }
    });
}

getUsers(names)
    .then(users => { 
        console.log('---'); 
        users.forEach((user, index) => {
            console.log(`${names[index]}: ${user}`);
        })
    });