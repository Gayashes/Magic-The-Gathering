const express = require('express');

const route = express.Router();
const {
  renderHome,
  renserOneCardMain,
  renderMainFilter,
  renderSearch,
} = require('../controllers/mainControllers');

route.get('/', renderHome);
route.post('/search', renderSearch);
route.post('/filter', renderMainFilter);
route.get('/onecard/:id', renserOneCardMain);

module.exports = route;
