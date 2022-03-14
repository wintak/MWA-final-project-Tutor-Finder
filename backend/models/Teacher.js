const mongoose = require("mongoose")

const TeacherSchema = mongoose.Schema({
userId:{
    type:Number
},
courses:[{courseId:Number},
         {courseTitle:String},
         {couseDescription:String}
        ]     
})

module.exports = mongoose.model("Teacher", TeacherSchema)