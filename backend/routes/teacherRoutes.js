const express = require('express');
const router = express.Router();
const teacherController = require('../controller/teacherController');


const { fetch, remove, addcourse, edit, searchCourse } = teacherController;

router.post('/addcourse', addcourse);

router.get('/', fetch);

router.delete('/:id', remove);
router.get('/search/:courseTitle', searchCourse);

module.exports = router;