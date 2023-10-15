const express = require('express');
const router = express.Router();
const { getObjects} = require('../controllers/rentACarObjectControllers');

router.route("/").get(getObjects)