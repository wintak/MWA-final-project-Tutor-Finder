const express = require('express');
const router = express.Router();
const teacherController = require('../controller/teacherController');


<<<<<<< HEAD
const { fetch, remove, add ,edit,getEnrolled } = teacherController;
=======
const { fetch, remove, add ,edit, searchCourse} = teacherController;
>>>>>>> cf56396eeb606853fed43cf8c94aaa6b3ecd0b65

router.post('/add', add);

router.get('/', fetch);

router.get('/view', getEnrolled);

router.patch('/',edit);

router.delete('/:id', remove);
router.get('/search/:courseTitle', searchCourse);

module.exports = router;