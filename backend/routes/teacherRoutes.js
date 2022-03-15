const express = require('express');
const router = express.Router();
const teacherController = require('../controller/teacherController');


const { fetch, remove, add ,edit,getEnrolled } = teacherController;

router.post('/add', add);

router.get('/', fetch);

router.get('/view', getEnrolled);

router.patch('/',edit);

router.delete('/:id', remove);

module.exports = router;