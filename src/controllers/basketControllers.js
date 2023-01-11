const render = require('../lib/render');
const basket = require('../views/Basket');
const { Card, Basket } = require('../../db/models');

const renderBasket = async (req, res) => {
  try {
    const baksetCard = [{
      id: 1,
      link: '21',
      status: true,
      location: '2',
      user_id: 1,
    }];

    const userBasket = await Basket.findAll({ include: Card });
    console.log('+++++++++++', userBasket);

    const user = req.session?.userName;
    render(basket, { user, userBasket }, res);
  } catch (error) {
    console.log(error);
  }
};

const postBasket = async (req, res) => {
  try {
    const { user_id, card_id } = req.body;
    console.log('=================== айдишники', user_id, card_id);
    await Basket.create({ user_id, card_id });
    res.end();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { renderBasket, postBasket };
