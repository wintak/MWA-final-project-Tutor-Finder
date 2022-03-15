const teacher = require('../models/Teacher');
const tokengen = require('../tokenGenerator/tokengen');
const Coursedata = require('../models/Course');

module.exports.fetch = async(req, res) => {
    let teacher = teacher.find({ tokengen }).exec()
    if (courses) {
        return res.json({
            success: 1,
            data: courses,
            msg: "courses found!",
            status: res.statusCode
        });
    } else {
        return res.json({ success: 1, data: {}, msg: "courses not found", status: res.statusCode });
    }
}

module.exports.remove = async(req, res) => {
    console.log(req.params);
    await teacher.deleteOne({ tokengen }, { $pull: { course: { courseId: req.params.id } } });
    res.json({ success: 1, data: `removed course with id ${req.params.id}` })
}

module.exports.addcourse = async(req, res) => {
    const { userId, course } = req.body
    console.log(userId, course);
    const teachers = await teacher.findOne({
        userId
    }).exec();
    console.log(teachers)
    if (teachers) {
        teacher.updateOne({ userId }, { $addToSet: { course: req.body } });

    } else {
        const result = User.adduser(
            new User({
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                email: email,
                passWord: passWord,
                role: role
            }));
    }


    module.exports.add = async(req, res) => {
        console.log("teacher" + req.body);

        const data = new teacher(req.body)
        await data.save()
        const result = teacher.addteacher(
            new teacher(req.body));
        console.log(result);

        // await teacher.updateOne({tokengen},{$push:{course:req.body}});

        res.send({ success: 1, data: teacher });

    }

    module.exports.edit = async(req, res) => {
        console.log(req.body);

        await teacher.updateOne({ tokengen }, { $set: { "course.$[obj]": req.body } }, { arrayFilters: { "obj.courseId": req.params.id } })
        res.send({ success: 1, data: teacher });

    }
    await teacher.updateOne({ tokengen }, { $set: { "course.$[obj]": req.body } }, { arrayFilters: { "obj.courseId": req.params.id } })
    res.send({ success: 1, data: teacher });

}

module.exports.searchCourse = async(req, res) => {

    const { courseTitle } = req.params;

    teacher.searchCoursesByCourseTitle(courseTitle).then((teachers) => {
        console.log(teachers)
        if (!teachers || teachers == null) {
            return res.json({
                success: false,
                data: {},
                msg: 'teachers not found!',
                status: res.statusCode
            });
        }

        return res.json({
            success: false,
            data: teachers,
            msg: 'teachers not found!',
            status: res.statusCode
        });


        // return payload

    });


}