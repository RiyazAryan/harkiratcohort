"use strict";
function isLegal(user) {
    return user.age > 18 ? true : false;
}
isLegal({
    firstName: "user",
    lastName: "name",
    age: 20
});
