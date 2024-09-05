interface User {
    firstName: string;
    lastName: string;
    age: number;
}

function filtersUsers(user: User[]){
    for (let i=0; i<user.length;i++){
        console.log(user[i].age)
    }
}