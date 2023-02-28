
const n = 100;

let a = [];
for( let i = 2; i < n; i++ ) a[i] = true;

let p = 2;
while( p*p < n ) {
    for( let k = p*p; k < n; k += p ) a[k] = false;
    for( p++; p < n; p++ ) if( a[p] ) break;
}

let str = '';
for( let i = 2; i < n; i++ ) {
    if( a[i] ) str += i + '; ';
}

console.log(str); 