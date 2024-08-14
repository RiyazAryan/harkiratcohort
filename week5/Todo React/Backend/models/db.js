const mongoose =require("mongoose");
require('dotenv').config()

mongoose.connect(process.env.Database);

const todoSchema=mongoose.Schema({
    title: String,
    descripton: String,
    completed: Boolean
})

const todo=mongoose.model('todo', todoSchema)

module.exports={
    todo
}