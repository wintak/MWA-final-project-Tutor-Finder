const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({


    enrolled: [{
        userId: String,
        courseTitle: String,
        firstName: String,
        studentId: String,
    }],



})


const Student = module.exports = mongoose.model('Student', StudentSchema);