const Course = require('../models/Course');

module.exports.getCourses = (req, res, next) => {

    Course.getCourses().then((courses) => {

        if (!courses) {
            res.json({
                success: false,
                data: {},
                msg: 'Courses not found!',
                status: res.statusCode
            });
        } else {
            res.json({
                success: true,
                data: courses,
                msg: "Courses Found",
                status: res.statusCode
            })
        }

    });
};
module.exports.getcourseBytitle = (req, res, next) => {
    const { courseTitle } = req.body;
    console.log(courseTitle);
    Course.searchCourseTitle(courseTitle).then((courses) => {

        if (!courses) {
            res.json({
                success: false,
                data: {},
                msg: 'Courses not found!',
                status: res.statusCode
            });
        } else {
            res.json({
                success: true,
                data: courses,
                msg: "Courses Found",
                status: res.statusCode
            })
        }

    });
};

module.exports.getCoursesById = (req, res, next) => {
    const { id } = req.body;
    console.log(id);
    Course.searchCourseid(id).then((courses) => {

        if (!courses) {
            res.json({
                success: false,
                data: {},
                msg: 'courses not found!',
                status: res.statusCode
            });
        } else {
            res.json({
                success: true,
                data: courses,
                msg: "courses Found !",
                status: res.statusCode
            })
        }

    });
};