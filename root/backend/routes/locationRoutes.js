const express = require('express');
const { newLocation, getLocationById, getAllLocations } = require('../controllers/locationControllers');
const router = express.Router();

router.route('/newLocation').post(newLocation);
router.route('/getLocationById/:locationId').get(getLocationById);
router.route('/getAllLocations').get(getAllLocations);

module.exports = router;