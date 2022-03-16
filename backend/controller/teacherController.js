
const teacher = require('../models/Teacher');
const tokengen = require('../tokenGenerator/tokengen');
const Coursedata = require('../models/Course');
module.exports.fetch = async (req, res) => {
    let teacher = teacher.find({ tokengen }).exec()
    if (courses) {
        return res.json({
            success: 1, data: courses, msg: "courses found!", status: res.statusCode
        });
    }
    else {
        return res.json({ success: 1, data: {}, msg: "courses not found", status: res.statusCode });
    }
}

module.exports.fetch= async (req, res) => {
    let  teacher = teacher.find({}).exec()
    res.json(   {success:1}   ,teacher)
//     if(courses){
//         return    res.json({ success: 1, data: courses , msg:"courses found!",  status: res.statusCode
//     });
//     }else{
//    return    res.json({ success: 1, data: {},msg:"courses not found" ,  status: res.statusCode});
//     }
}
module.exports.remove = async (req, res) => {
    console.log(req.params);
    await teacher.deleteOne({ tokengen }, { $pull: { course: { courseId: req.params.id } } });
    res.json({ success: 1, data: `removed course with id ${req.params.id}` })
}

module.exports.add = async (req, res) => {
    console.log("teacher" + req.body);
    
const data = new teacher(req.body)
    await data.save()
    const result = teacher.addteacher(
        new teacher(req.body));
        console.log(result);

    // await teacher.updateOne({tokengen},{$push:{course:req.body}});
    res.send({ success: 1, data: teacher });

}

module.exports.edit = async (req, res) => {
    console.log(req.body);
    await teacher.updateOne({ tokengen }, { $set: { "course.$[obj]": req.body } },
        { arrayFilters: { "obj.courseId": req.params.id } })
    res.send({ success: 1, data: teacher });

}
module.exports.getEnrolled= async(req,res)=>{
 const students= await teacher.findOne({tokengen},{projection:{enrolledd:1}})
 if(students){
  return res.json({success:1, data:students, msg:`student found`}) 
 }else{
    return    res.json({ success: 1, data: {},msg:`student not found`})
 }
}

module.exports.searchCourse = async (req, res) => {

    const { courseTitle } = req.params;

    console.log("we ARE HWEW ROUER"+courseTitle)


     const teachersList = teacher.searchCoursesByCourseTitle(courseTitle).then((teachers) => {
        console.log(teachers)
        if (!teachers || teachers == null) {
            return res.json({
                success: false,
                data: {},
                msg: 'teachers not found!',
                status: res.statusCode
            });
        };
        console.log(teacher)
        const payload=[]
        return res.json({
            success: false,
            data: teachers,
            msg: 'teachers not found!',
            status: res.statusCode
        });
     });
      

        // teachers.map((t)=>{
        //     const userId=t.userId
        //     t.courses.map((c)=>{
        //       const  courseTitle=c.courseTitle
        //          if(courseTitle){
        //             payload.push({userId,courseTitle})
        //             Coursedata.searchCourseTitle(courseTitle).then((courses)=>{
        //              payload.push(courses)

        //             })

                //     Coursedata.searchCourseTitle(courseTitle).then((courses)=>{
                //          payload.push(courses)
                 //}

                //  }

        //     })
        // })
        
        
        // return payload

    

    // teacher.searchCoursesByCourseTitle(courseTitle)
    //     .then(teachers => {
    //         const cx = teachers[0].courses;

    //         const mapped = teachers.map(t => { return { ...t, courses: t.courses.filter(c => c.courseTitle == courseTitle) } });
    //         console.log(mapped);
    //         const ts = mapped.filter(t => t.courses.length > 0);
    //         console.log(ts);
    //         res.json({ msg: 'sucessful', ts })

    //     }, (err) => {
    //         res.json({ msg: 'failed' });
    //     });
 
}
