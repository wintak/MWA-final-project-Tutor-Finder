const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
    courseTitle: {
        type: String
    },

    courseDescription: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    catagory: {
        type: String,
        required: true
    }
});

const Course = module.exports = mongoose.model('Course', CourseSchema);

module.exports.getCourses = async() => {
    return await Course.find({

    }).exec();
};
module.exports.searchCourseTitle = async (courseTitle) => {
    console.log(courseTitle);
    return await Course.find({
        courseTitle: courseTitle
    }).exec();
}

module.exports.searchCourseid = async(id) => {
    console.log(id);
    return await Course.find({

        _id: id
    }).exec();
}