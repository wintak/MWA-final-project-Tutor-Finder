const { Router } = require('express');
const express = require('express');
const authenticate = require('../middleware/authenticate')
const router = express.Router();
const userController = require('../controller/userController');

//routes
router.post('/signup', userController.adduser);
router.post('/signin', userController.signin);
router.get('/verify/:email', userController.verifyemail);
router.get('/protected', authenticate, userController.authenticate);

module.exports = router;