
'use strict'

function printList(p) {
    console.log(p.value);
    if (p.next) printList(p.next);
}

function printList2(list) {
    let p = list;
    while (p) {
      console.log(p.value);
      p = p.next;
    }  
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

printList(list);