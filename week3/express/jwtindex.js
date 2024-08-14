const express = require("express")
const jwt = require("jsonwebtoken")
const jwtpass = "shhhh"

const app = express();

const ALL_USERS=[
    {
        username: "a1@gmail.com",
        password: "a123456",
        name: "a1"
    },
    {
        username: "b1@gmail.com",
        password: "b123456",
        name: "b1"
    },
    {
        username: "c1@gmail.com",
        password: "c123456",
        name: "c1"
    }
]

app.use(express.json());

function userExists(username, password){
    return ALL_USERS.find(user=>user.username===username && user.password===password);
}

app.get("/users",(req,res)=>{
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtpass);
        const username = decoded.username;
        res.status(200).json({users:ALL_USERS.filter(user=>user.username!==username)}) 
    } catch(err){
        return res.status(403).send(({msg : "Invalid Token"}))
    }
});

app.post("/signin",(req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    if(!userExists(username, password))
    {
        res.status(403).json({
            msg: "User doesn't exist in our db",
        })
        return;
    }
    var token =jwt.sign({username: username}, jwtpass);
    res.status(200).json({
        token,
    })
})

app.listen(3333);