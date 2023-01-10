const express = require('express');

const route = express.Router();

const render = require('../lib/render');
const Main = require('../src/views/Main');

route.get('/', (req, res) => {
  render(Main, null, res);
});

module.exports = route;
