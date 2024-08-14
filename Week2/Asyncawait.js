function test(duration){
    return new Promise((resolve)=>{
        setTimeout(resolve,duration);
    })
}

async function main(){
    console.log("Started");
    await test(1000);
    console.log("Done");
}

main();
