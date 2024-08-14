function wait1(t) {
    return new Promise((resolve)=>{
        setTimeout(resolve,t*1000);
    });
}

function wait2(t) {
    return new Promise((resolve)=>{
        setTimeout(resolve,t*1000);
    });
}

function wait3(t) {
    return new Promise((resolve)=>{
        setTimeout(resolve,t*1000);
    });
}

function calculateTime(t1, t2, t3) {
    const start=Date.now();
    wait1(t1)
        .then(()=>{
            return wait2(t2);
        })
        .then(()=>{
            return wait3(t3);
        }).then(()=>{
            return Date.now()-start
        });
}

const a= calculateTime(1,2,3);
console.log(a);