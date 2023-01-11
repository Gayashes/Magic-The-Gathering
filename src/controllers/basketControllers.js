const render = require('../lib/render');
const basket = require('../views/Basket');
const { Card, Basket } = require('../../db/models');

const renderBasket = async (req, res) => {
  try {
    const user_id_buy = req.session.userId;
    console.log('============', user_id_buy);
    const userBasket = await Basket.findAll({ where: { user_id_buy }, include: Card });

    const user = req.session?.userName;
    render(basket, { user, userBasket }, res);
  } catch (error) {
    console.log(error);
  }
};

const postBasket = async (req, res) => {
  try {
    const user_id_buy = req.session.userId;
    const { user_id, card_id } = req.body;
    console.log('=================== айдишники', user_id, card_id);
    await Basket.create({ user_id, card_id, user_id_buy });
    res.end();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { renderBasket, postBasket };
