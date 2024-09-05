function runafter(fn: ()=>void){
    setTimeout(fn, 3000)
}

runafter(function(){
    console.log("hi")
})