"use strict";
function getFirstelement(arr) {
    return arr[0];
}
const e1 = getFirstelement([{ name: "a", age: 22 }]);
const e2 = getFirstelement([1, 2]);
const e3 = getFirstelement([true, false]);
console.log(e1, e2, e3);
