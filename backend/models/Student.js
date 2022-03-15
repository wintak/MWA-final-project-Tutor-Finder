const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({

    studentId: String,
    enrolledCourses: [{
        courseTitile: String,
        teacherName: String,
        courseId: String,
        courseDescription: String
    }]
})


const Student = module.exports = mongoose.model('Student', StudentSchema);


