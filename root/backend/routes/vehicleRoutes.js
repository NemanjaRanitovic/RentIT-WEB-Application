const express = require('express');
const { addVehicle} = require('../controllers/vehicleControllers');
const router = express.Router();

router.route('/addVehicle').put(addVehicle);

module.exports = router;