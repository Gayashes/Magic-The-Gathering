const render = require('../lib/render');
const Basket = require('../views/Basket');
// const { User } = require('../../db/models');

const renderBasket = (req, res) => {
  try {
    const user = req.session?.userName;
    render(Basket, { user }, res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = renderBasket;
