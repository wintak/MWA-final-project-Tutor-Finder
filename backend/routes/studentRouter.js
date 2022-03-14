const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');


router.get('/:studentId', studentController.getById);
//router.post('/', studentController.sendCourse);
router.post('/', studentController.addStudents)
router.post('/:_id/:courseId', studentController.deleteCourse);




module.exports = router;