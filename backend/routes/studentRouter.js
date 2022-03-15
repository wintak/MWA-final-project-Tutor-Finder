const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');


router.get('/:studentId', studentController.getById);
router.post('/', studentController.sendCourse);
router.post('/:_id/:courseId', studentController.deleteCourse);
router.post('/enroll', studentController.enroll);
console.log("routerhere")
router.get('/checkenroll', studentController.enrolledCourses);

module.exports = router;