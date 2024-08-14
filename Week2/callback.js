function test(callback, duration){
    setTimeout(callback,duration);
}

test(function(){
    console.log("1");
    test(function(){
        console.log("2");
        test(function(){
            console.log("3");
        },3000)
    },2000)
},1000);