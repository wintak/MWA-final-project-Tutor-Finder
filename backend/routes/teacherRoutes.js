const express = require('express');
const router = express.Router();
const teacherController = require('../controller/teacherController');


const { fetch, remove, addcourse, edit } = teacherController;

router.post('/addcourse', addcourse);

router.get('/', fetch);

router.patch('/', edit)

router.delete('/:id', remove);

module.exports = router;