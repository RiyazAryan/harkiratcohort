function identity<T>(arg: T){
    return arg
}

let o1 = identity<string>("string")
let o2 = identity<number>(100)
console.log(o1.toUpperCase())
console.log(o2)