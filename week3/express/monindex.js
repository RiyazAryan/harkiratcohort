const express = require("express")
const jwt = require("jsonwebtoken")
const mongo= require("mongoose");
const env = require("dotenv")

const jwtpass = "shhhh"
env.config();
const app = express();
mongo.connect(process.env.MONGOURL);

const Users=mongo.model("Users",{name: String ,email: String, password: String});

app.use(express.json());

function userExists(email){
    return Users.findOne({email});
}

app.get("/users",async(req,res)=>{
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtpass);
        const username = decoded.username;
        console.log(username);
        const user= await Users.findOne({
            email: username,
        });
        res.status(200).json({user}) 
    } catch(err){
        return res.status(403).send(({msg : "Invalid Token"}))
    }
});

app.post("/signin",async(req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const name=req.body.name;
    if(!userExists(username))
    {
        res.status(403).json({
            msg: "User doesn't exist in our db",
        })
        return;
    }
    const user = await Users.create({
        name: name,
        email: username,
        password: password
    })
    var token =jwt.sign({username: username}, jwtpass);
    res.status(200).json({
        token,
        user
    })
})

app.listen(3333);