const render = require('../lib/render');
const Cabinet = require('../views/Cabinet');
const { Basket } = require('../../db/models');

const renderBasket = (req, res) => {
  render(Basket, null, res);
};

module.exports = renderBasket;