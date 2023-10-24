const express = require('express');
const { addVehicle, getVehicleById} = require('../controllers/vehicleControllers');
const router = express.Router();

router.route('/addVehicle').put(addVehicle);
router.route('/getVehicleById/:vehicleId').get(getVehicleById);

module.exports = router;