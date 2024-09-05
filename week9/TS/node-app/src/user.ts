function isLegal(user: User){
    return user.age>18?true:false
}
interface User{
    firstName: string,
    lastName: string,
    age:number,
    email?: string // ? makes it optional
}
isLegal({
    firstName: "user",
    lastName:"name",
    age:20
})