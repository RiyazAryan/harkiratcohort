const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course}= require("../db/index")
const asyncHandler=require("express-async-handler")
// User Routes
router.post('/signup', asyncHandler(async(req, res) => {
    // Implement user signup logic
    const username=req.body.username;
    const password=req.body.password;
    if(username && password){
        const check= await User.findOne({username})
        if(check){
            res.status(400).json({
                error:"Username already exists"
            })
        }
        else{
            usercreate= await User.create({
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

router.get('/courses', (req, res) => {
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


router.post('/courses/:courseId', userMiddleware, asyncHandler(async(req, res) => {
    // Implement course purchase logic
    const courseId=req.params.courseId;
    const username=req.headers.username
    const check=await User.findOne({username}).then((value)=>value.purchasedCourses.some((value1)=>value1.equals(courseId)))
    if(!check){
        await User.updateOne({
            username: username
        }, {
            "$addToSet": {
                purchasedCourses: courseId
            }
        })
        res.json({
            message: "Purchase complete!"
        })
    }
    else{
        res.status(400).send("Course already purchased");
    }
}
));

router.get('/purchasedCourses', userMiddleware, asyncHandler(async(req, res) => {
    // Implement fetching purchased courses logic
    const username=await User.findOne({username:req.headers.username});
    Course.find({_id:{
        "$in":username.purchasedCourses
    }}).then((value)=>{
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
}));

module.exports = router