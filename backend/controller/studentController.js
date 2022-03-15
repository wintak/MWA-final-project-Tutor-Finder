const mongoose = require('mongoose')
const Student = require('../models/Student')


module.exports.getById = async(req, res) => {
    const id = req.params.studentId;
    await Student.findById(id).exec((err, data) => {
        if (!err) {
            res.json(data.enrolledCourses);
        }
    });
}

module.exports.sendCourse = async(req, res) => {
    const { _id, courseId } = req.body;



}

module.exports.addStudents = async(req, res) => {
    const body = req.body;
    await Student.insertMany(body).exec((err, data) => {
        if (!err) {
            res.json({ msg: true });
        }
    })

}

module.exports.deleteCourse = async(req, res) => {
    const { _id, courseId } = req.params;
    await Student.updateOne({ studentId: _id }, { $pull: { enrolledCourses: { courseId: courseId } } }).exec((err, data) => {
        if (!err) {
            res.json({ msg: 'sucessful' })
        }
    })
}
module.exports.enroll = async(req, res) => {
    const { studentId, userId, firstName, courseTitle } = req.body;
    console.log(req.body)

    const studenttitle = await Student.findOne({
        'enrolled.courseTitle': courseTitle
    }).exec();
    console.log("okay" + studenttitle)
    if (studenttitle) {
        return res.json({
            success: false,
            data: {},
            msg: 'already enrollment',
            status: res.statusCode
        })
    }

    const students = await Student.findOne({
        studentId: studentId
    }).exec();
    if (students) {

        const r = await Student.updateOne({ studentId }, {
            $addToSet: {

                enrolled: { studentId, userId, firstName, courseTitle }
            }

        })

    } else {
        const result = await new Student({
            enrolled: [req.body]
        }).save();
        if (result) {
            res.json({ success: true, data: {}, msg: 'new  enrollment added !', status: res.statusCode })

        } else {
            res.json({
                success: false,
                data: {},
                msg: 'Failed to add enrollment',
                status: res.statusCode
            })

        }


    }



}
module.exports.enrolledCourses = async(req, res) => {
    const result = await Student.find({}).exec();
    console.log(result)
    return res.json({
        success: false,
        data: result,
        msg: 'enrollment',
        status: res.statusCode
    })


}