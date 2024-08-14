const express= require("express")
const cors=require("cors")

const app=express()
app.use(cors())

app.get("/sum",(req,res)=>{
    const a=req.query.a;
    const b=req.query.b;
    const c=parseInt(a)+parseInt(b)
    console.log(c)
    res.send(c.toString());
})

app.get("/intrest",(req,res)=>{
    const a=req.query.p;
    const b=req.query.r;
    const c=req.query.i;
    const result=parseInt(a)*parseInt(b)*parseInt(c)/100
    const total= a+result
    console.log(result+" "+total)
    res.send({
        Intrest: result,
        Total: total
    });
})

app.listen(3003,(err)=>{
    if(!err){
        console.log("Success");
    }
    else{
        console.log("Failed")
    }
})