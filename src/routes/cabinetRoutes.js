const express = require('express');

const router = express.Router();

const { renderCabinet, postCabinet, deleteCabinet } = require('../controllers/cabinetControllers');

router.get('/', renderCabinet);
router.post('/', postCabinet);
router.get('/delete/:id', deleteCabinet);

module.exports = router;
