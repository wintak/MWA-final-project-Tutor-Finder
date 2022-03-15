const teacher = require('../models/Teacher');
const tokengen = require('../tokenGenerator/tokengen');

module.exports.fetch = async(req, res) => {

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


    res.send({ success: 1, data: teacher });

}

module.exports.edit = async(req, res) => {
    console.log(req.body);
    await teacher.updateOne({ tokengen }, { $set: { "course.$[obj]": req.body } }, { arrayFilters: { "obj.courseId": req.params.id } })
    res.send({ success: 1, data: teacher });

}