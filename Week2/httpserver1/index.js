const express= require("express");
const fs=require("fs");
const app=express();

const PORT=3001;

function check(data, id){
const check=data.filter(todo=>String(todo.id)==id);
if(check.length==0){
    return false;
}
return true;
}

app.use(express.json());
app.get("/",(req,res)=>{
    res.status(200).send("TODO Server Started");
});

app.get("/todos",(req,res)=>{
    fs.readFile("todos.json","utf-8",(err, data)=>{
        data=JSON.parse(data);
        res.status(200).send(data);
        return;
    })
});

app.get("/todos/:id",(req,res)=>{
    const id=req.params.id;
    fs.readFile("todos.json","utf-8",(err, data)=>{
        data=JSON.parse(data);
        data=data.filter(todo=> String(todo.id)==id);
        if(data.length !=0){
            res.status(200).send(data[0]);
            return;
        }
        else{
            res.status(404).send();
            return;
        }
    })  
});

app.post("/todos", (req, res) => {
    
  const newTodo = {
    id: Math.floor(Math.random() * 1000000), // unique random id
    title: req.body.title,
    description: req.body.description,
    completed:req.body.completed
  }; 
  fs.readFile("todos.json", "utf-8", (err, data) => {
      data = JSON.parse(data);
      data.unshift(newTodo);
      fs.writeFile("todos.json", JSON.stringify(data), (err) => {
          if (err) {
              console.log("failed");
              res.status(500);
              return;
          }
          else{ 
            res.status(201).send(newTodo);
          return;
        }
      })
  })
});

app.put("/todos/:id",(req,res)=>{
    const id=req.params.id;
    fs.readFile("todos.json","utf-8",(err, data)=>{
        data=JSON.parse(data);
        if(check(data, id)){
            data=data.map(todo=> {
                if(String(todo.id)==id){
                    if(req.body.title){
                    todo.title=req.body.title;
                    }
                    if(req.body.description){
                    todo.completed=req.body.description;
                    }
                    if(req.body.completed){
                    todo.completed=req.body.completed;
                    }
                }
                    return todo;
                });
        }
        else{
            res.status(404).send();
            return;
        }
        fs.writeFile("todos.json",JSON.stringify(data),(err)=>{
            if(err){
                console.log("failed");
                return;
            }
            res.status(200).send(data);
        })
    })
    
});

  app.delete("/todos/:id",(req,res)=>{
      const id=req.params.id;
      fs.readFile("todos.json","utf-8",(err, data)=>{
          data=JSON.parse(data);
          if(!check(data,id)){
            res.status(404).send();
            return;
          }
          data=data.filter(todo=> String(todo.id)!==id);
          fs.writeFile("todos.json",JSON.stringify(data),(err)=>{
              if(err){
                  console.log("failed");
                  return;
              }
              res.status(200);
          });
      })
      
  });

  app.use((req,res,next)=>{
    res.status(404);  
  });
app.listen(PORT);

