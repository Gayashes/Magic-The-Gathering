const express = require('express');

const router = express.Router();

const { renderOrder, sendlerOrder } = require('../controllers/orderControllers');

router.get('/', renderOrder);
router.get('/send', sendlerOrder);

module.exports = router;
