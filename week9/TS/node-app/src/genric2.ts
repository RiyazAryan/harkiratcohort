function getFirstelement<T>(arr:T[]):T{
    return arr[0]
}

interface check{
    name: string,
    age: number
}

const e1=getFirstelement<check>([{name:"a", age:22}])
const e2=getFirstelement([1,2])
const e3=getFirstelement([true, false])
console.log(e1,e2,e3)