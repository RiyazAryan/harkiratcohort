const express= require("express")

const app=express();

app.get("/",(req,res)=>{
    const un=req.headers.username;
    const pass=req.headers.password;
    const kcount=req.query.kcount;
    if(!(un==="Riyaz" && pass==="pass")){
        res.status(400).send("Unauthorized user");
    }
    if(kcount!=1 && kcount!=2){
        res.status(400).send("Invalid Input");
    }
    res.status(200).json({"msg":"Kidney fine"})
})

app.listen(5000)