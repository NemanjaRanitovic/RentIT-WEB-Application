const express = require('express');
const { registerUser,logIn } = require('../controllers/userControllers');
const router = express.Router();

router.route('/register').post(registerUser); //users
router.route('/login').post(logIn);  //users/login

module.exports = router;