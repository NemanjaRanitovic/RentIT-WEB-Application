const express = require('express');
const { newLocation, } = require('../controllers/locationControllers');
const router = express.Router();

router.route('/newLocation').post(newLocation);

module.exports = router;