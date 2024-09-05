"use strict";
isLegalcheck({
    firstName: "user",
    lastName: "name",
    age: 20
});
isLegalcheck2({
    firstName: "user",
    lastName: "name",
    age: 20
});
function isLegalcheck(user) {
    return user.age > 18 ? true : false;
}
function isLegalcheck2(user) {
    return user.age > 18 ? true : false;
}
