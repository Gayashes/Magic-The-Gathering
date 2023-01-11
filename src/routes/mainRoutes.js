const express = require('express');

const route = express.Router();
const renderHome = require('../controllers/mainControllers');

route.get('/', renderHome);

module.exports = route;
