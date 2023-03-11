
'use strict'

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}
  
async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        return await response.json();
    } 
    else {
        throw new HttpError(response);
    }
}
  
let names = ["evgxyz89", "iliakan"];
let namesIndex = 0;
// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
    while(true) {
        let name = names[namesIndex++];

        try {
            let user = await loadJson(`https://api.github.com/users/${name}`)   
            console.log(`Полное имя: ${user.name}.`);
            break;
        } 
        catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                console.log("Такого пользователя не существует, пожалуйста, повторите ввод.");
            } else {
                throw err;
            }
        }
    }
}
  
demoGithubUser();