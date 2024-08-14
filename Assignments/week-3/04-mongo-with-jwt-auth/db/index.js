const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://riyazaryanshaik:MomDad9786@cluster0.y64wmc5.mongodb.net/week3-Cohort?retryWrites=true&w=majority');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: {type : String, required : true, trim : true},
    password: {type : String, required : true, trim : true}
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:{type : String, required : true, trim : true},
    password:{type : String, required : true, trim : true},
    purchasedCourses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: {type : String, required : true},
    description: {type : String},
    image: {type : String},
    price: {type : Number, required : true, trim : true}
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}