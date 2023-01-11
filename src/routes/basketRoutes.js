const express = require('express');

const router = express.Router();

const basketControllers = require('../controllers/basketControllers');


router.get('/', basketControllers);

module.exports = router;