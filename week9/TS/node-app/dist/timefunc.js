"use strict";
function runafter(fn) {
    setTimeout(fn, 3000);
}
runafter(function () {
    console.log("hi");
});
