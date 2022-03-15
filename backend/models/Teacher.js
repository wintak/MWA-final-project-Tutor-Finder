const mongoose = require("mongoose")



const TeacherSchema = mongoose.Schema({

    userId: String,
    firstName: String,

    courses: [{ userId: String, courseTitle: String, courseDescription: String, rating: Number, catagory: String, }],



    enrolled: [{ studentId: Number, studentName: String }]

})


module.exports = mongoose.model("Teacher", TeacherSchema)

module.exports.searchCoursesByCourseTitle = async(title) => {
    const data = Teacher.find({
            "courses.courseTitle": title,
        }

    ).exec()

    return data;
};

module.exports.searchCourseTitle = async(courseTitle) => {
    console.log(courseTitle);
    return await Course.find({
        courseTitle: courseTitle
    }).exec();
}
module.exports.addteacher = async(teacher) => {
    console.log(teacher);
}