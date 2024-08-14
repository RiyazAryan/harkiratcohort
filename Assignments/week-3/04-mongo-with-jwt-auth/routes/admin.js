const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const asyncHandler=require("express-async-handler");
const jwt=require("jsonwebtoken")
const {Admin, Course}=require("../db/index")
require("dotenv").config()
const router = Router();

// Admin Routes
router.post('/signup',asyncHandler(async(req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    if(username && password){
        const check= await Admin.findOne({username})
        if(check){
            res.status(400).json({
                error:"Username already exists"
            })
        }
        else{
            usercreate= await Admin.create({
            username: username,
            password: password
            });
            if(usercreate){
            res.send({
                msg:"User created Successfully"
            })
        }
        else{
            res.status(500).json({
                msg:"Internal error try again!..."
            })
        }
        }
    }
    else{
        res.status(200).json({
            msg:"No details provided"
        })
    }
}));

router.post('/signin', asyncHandler(async(req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    const check= await Admin.findOne({username})
    if(check){
        if(check.password === password){
            const token=jwt.sign({_id:check._id}, process.env.JWT_SECRET);
            res.json({token}).status(200)
        }
        else{
            res.send("Incorrect Credentials").status(404);
        }
    }
    else{
        res.status(200).json({
            msg:"User doesn't exist."
        })
    }
}));

router.post('/courses', adminMiddleware, asyncHandler(async(req, res) => {
    // Implement course creation logic
    const title= req.body.title;
    const description= req.body.description;
    const image= req.body.image;
    const price= req.body.price;
        const check= await Course.create({
            title: title,
            description: description,
            image:image,
            price:price
        })
        if(check){
            res.status(200).json({
            msg:"Successfully created the Course"
            })
        }
        else{
            res.send(500).json({
                error:"Internal error.Try again!..."
            })
        } 
}));

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({}).then((value)=>{
        if(value){
            res.status(200).json({
                value
            })
        }
        else{
            res.send(500).json({
                error:"Internal error.Try again!..."
            })
        }
    })
});

module.exports = router;