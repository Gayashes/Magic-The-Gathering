const express = require('express');

const router = express.Router();

const { renderCabinet, postCabinet } = require('../controllers/cabinet')

router.get('/', renderCabinet);
router.post('/', postCabinet);

module.exports = router;
