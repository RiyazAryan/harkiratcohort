function test(duration){
    return new Promise((resolve)=>{
        setTimeout(resolve,duration);
    })
}

test(1000)
    .then(()=>{
        console.log("1");
        return test(2000);
    })
    .then(()=>{
        console.log("2");
        return test(3000);
    }).then(()=>{
        console.log("3")
    });


    

