"use strict";
function identity(arg) {
    return arg;
}
let o1 = identity("string");
let o2 = identity(100);
console.log(o1.toUpperCase());
console.log(o2);
