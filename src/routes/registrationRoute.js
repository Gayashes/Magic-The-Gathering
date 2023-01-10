const express = require('express');

const router = express.Router();

const render = require('../lib/render');

const Regist = require('../views/Registration');

const regUser = require('../controllers/registrController');

router.get('/', (req, res) => {
  render(Regist, null, res);
});

router.post('/', regUser);

module.exports = router;
