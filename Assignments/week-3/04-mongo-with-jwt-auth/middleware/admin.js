// Middleware for handling auth
const jwt=require("jsonwebtoken")
const {Admin}=require("../db/index")
require("dotenv").config()
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer"))
    {
        try{
            const token=req.headers.authorization.split(" ")[1];
            const decode=jwt.verify(token, process.env.JWT_SECRET);
            req.user=await Admin.findById(decode.id).select("-password");
            next();
        }
        catch(err){
            res.send("Unauthorized. Token expired or not valid.")
        }
        
    }

}

module.exports = adminMiddleware;