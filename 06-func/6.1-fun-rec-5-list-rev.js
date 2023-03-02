
'use strict'

function printListRev(p) {
    if (p.next) printListRev(p.next);
    console.log(p.value);
}

function printListRev2(list) {
    let p = list;
    let arr = [];
    while (p) {
      arr.push(p.value);
      p = p.next;
    }
    arr.reverse().forEach( 
        x => console.log(x)
    ); 
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

printListRev(list);