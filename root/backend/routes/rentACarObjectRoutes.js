const express = require('express');
const { newRentACarObject} = require('../controllers/rentACarObjectControllers');
const router = express.Router();

router.route('/newRentACarObject').post(newRentACarObject);


module.exports = router;