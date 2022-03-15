const mongoose = require('mongoose')
const Student = require('../models/Student')


module.exports.getById = async(req, res) =>{
    const id = req.params.studentId;
   await Student.findById(id).exec((err,data) =>{
        if(!err){ 
            res.json(data.enrolledCourses);
        }
    });
}

module.exports.sendCourse = async (req, res) =>{
    const {_id, courseId} = req.body;



}

module.exports.addStudents = async (req,res) => {
    const body = req.body;
   await Student.insertMany(body).exec((err,data) => {
        if(!err){
            res.json({msg: true});
        }
    })

}

module.exports.deleteCourse = async (req, res) => {
    const {_id, courseId} = req.params;
   await Student.updateOne({studentId: _id}, {$pull:{enrolledCourses : {courseId: courseId}}}).exec((err,data) => {
        if(!err){
            res.json({msg : 'sucessful'})
        }
    })
}



