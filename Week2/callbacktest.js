function square(n){
return n*n;
}
function cube(n){
return n*n*n;
}
function quad(n){
return n*n*n*n;
}
function sumof(m,n,func){
    let x=func(m);
    let y=func(n);
    return x+y;
}
console.log(sumof(1,2,cube))
