const express = require('express');

const router = express.Router();

const { renderBasket, postBasket } = require('../controllers/basketControllers');

router.get('/', renderBasket);
router.post('/', postBasket);

module.exports = router;
