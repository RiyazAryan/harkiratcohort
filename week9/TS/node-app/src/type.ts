type User1 = {
    firstName: string;
    lastName: string;
    age: number
}
//types can't be used to implement in classes

interface User2{
    firstName: string;
    lastName: string;
    age: number
}

isLegalcheck({
    firstName: "user",
    lastName:"name",
    age:20
})
isLegalcheck2({
    firstName: "user",
    lastName:"name",
    age:20
})

function isLegalcheck(user: User1){
    return user.age>18?true:false
}

function isLegalcheck2(user: User2){
    return user.age>18?true:false
}