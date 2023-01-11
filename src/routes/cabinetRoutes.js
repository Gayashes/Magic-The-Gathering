const express = require('express');

const router = express.Router();

const { renderCabinet, postCabinet, deleteCabinet, changeCabinet, saveCabinet } = require('../controllers/cabinetControllers');

router.get('/', renderCabinet);
router.post('/', postCabinet);
router.get('/delete/:id', deleteCabinet);
router.get('/change/:id', changeCabinet);
router.post('/save/:id', saveCabinet);

module.exports = router;
