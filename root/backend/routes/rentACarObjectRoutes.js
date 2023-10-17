const express = require('express');
const { newRentACarObject, getAllObjects, getObjectById } = require('../controllers/rentACarObjectControllers');
const router = express.Router();

router.route('/newRentACarObject').post(newRentACarObject);
router.route('/getAllObjects').get(getAllObjects);
router.route('/getObjectById/:objectId').get(getObjectById);


module.exports = router;
