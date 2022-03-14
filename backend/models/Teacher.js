const mongoose = require("mongoose")

const TeacherSchema = mongoose.Schema({
userId:{
    type:Number
},
courses:[{courseId:Number},
         {courseTitle:String},
         {couseDescription:String}
        ] ,
enrolled:[]    
})
 
module.exports = mongoose.model("Teacher", TeacherSchema)