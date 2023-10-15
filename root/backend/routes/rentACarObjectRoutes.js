const express = require('express');
const { newRentACarObject, getAllObjects } = require('../controllers/rentACarObjectControllers');
const router = express.Router();

router.route('/newRentACarObject').post(newRentACarObject);
router.route('/getAllObjects').get(getAllObjects);


module.exports = router;
