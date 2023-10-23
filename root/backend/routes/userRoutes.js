const express = require('express');
const { registerUser,logIn,editProfile,getAllNames,getAllManagers,assignManager} = require('../controllers/userControllers');
const router = express.Router();

router.route('/register').post(registerUser); //users
router.route('/login').post(logIn);  //users/login
router.route('/editProfile').put(editProfile); //
router.route('/getAllNames').get(getAllNames);
router.route('/getAllManagers').get(getAllManagers);
router.route('/assignManager').put(assignManager);

module.exports = router;