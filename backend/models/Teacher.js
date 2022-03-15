const mongoose = require("mongoose")

const TeacherSchema = mongoose.Schema({
userId:{
    type:Number
},
courses:[ ],
enrolled:[]    
});
 
const Teacher = module.exports = mongoose.model('Teacher', TeacherSchema);

module.exports.searchCoursesByCourseTitle = async (title) => {
    console.log(title)
    const data =Teacher.find({
        "courses.courseTitle":title,
    }

    ).exec()

return data;
};

module.exports.searchCourseTitle = async (courseTitle) => {
    console.log(courseTitle);
    return await Course.find({
        courseTitle: courseTitle
    }).exec();
}
module.exports.addteacher= async(teacher)=>{
        console.log(teacher);
}
