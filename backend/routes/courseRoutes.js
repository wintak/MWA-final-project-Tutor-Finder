const { Router } = require('express');
const express = require('express');
const authenticate = require('../middleware/authenticate')
const router = express.Router();
const courseController = require('../controller/courseListsController');

//routes
router.get('/allcourses', courseController.getCourses);
router.post('/searchByTitle', courseController.getcourseBytitle);
router.post('/searchById', courseController.getCoursesById);

module.exports = router;