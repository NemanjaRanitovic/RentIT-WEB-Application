const express = require('express');
const { registerUser,logIn,editProfile} = require('../controllers/userControllers');
const router = express.Router();

router.route('/register').post(registerUser); //users
router.route('/login').post(logIn);  //users/login
router.route('/editProfile').put(editProfile); //

module.exports = router;