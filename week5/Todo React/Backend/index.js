const express = require("express");
const app=express();
const {createTodo, updateTodo}= require("./types");
const {todo}=require("./models/db")
const cors= require("cors");
require('dotenv').config()

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log("Server Started")
})

// title: strinng, Desc: string, completed:boolean
app.post("/todo",async (req,res)=>{
    const body=req.body;
    const parsebody=createTodo.safeParse(body);
    if(!parsebody){
        res.status(411).json({
            msg:"Invalid input"
        })
    }
    await todo.create({
        title: req.body.title,
        description: req.body.description,
        completed: false
    }).then(()=>{
        res.status(200).json({
            msg:"Todo Added"
        })
    })
});

app.get("/todos",async (req,res)=>{
    const todos=await todo.find()
    if(todos){
        res.status(200).json({
            todos
        })
    }});

app.put("/completed",async (req,res)=>{
    const body=req.body;
    const parsebody=updateTodo.safeParse(body);
    if(!parsebody){
        res.status(411).json({
            msg:"Invalid input"
        })
    }
    await todo.updateOne({ _id : req.body.id}, {completed: true})
        .then(()=>res.status(200).json({
            msg:"Todo Updated"
}))});