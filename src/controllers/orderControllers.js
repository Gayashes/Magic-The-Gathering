const render = require('../lib/render');
const order = require('../views/Order');
const { Card, Basket, User } = require('../../db/models');
const mailer = require('../app');

const renderOrder = async (req, res) => {
  try {
    const user_id_buy = req.session.userId;

    const userBasket = await Basket.findAll({ where: { user_id_buy }, include: Card });

    const user = req.session?.userName;

    const sum = 0;

    render(order, { user, userBasket, sum }, res);
  } catch (error) {
    console.log(error);
  }
};

const postBasket = async (req, res) => {
  try {
    const user_id_buy = req.session.userId;
    const { user_id, card_id } = req.body;
    await Basket.create({ user_id, card_id, user_id_buy });
    res.end();
  } catch (error) {
    console.log(error);
  }
};

const sendlerOrder = async (req, res) => {
  const emailRecipient = await Basket.findAll({ where: { user_id_buy: req.session.userId }, include: Card });
  emailRecipient.forEach(async (card) => {
    const message = {
      from: 'testovaya1@inbox.ru',
      to: card.Card.email,
      subject: 'Покупка через MTG_app', // заголовок
      text: `Поздравляем! Вашу карточку ${card.Card.title}, купили за ${card.Card.cost}`, // тест сообщения
    };
    mailer(message);
    await Card.destroy({ where: { id: card.card_id } });
  });
  await Basket.destroy({ where: { user_id_buy: req.session.userId } });

  res.redirect('/');
};

module.exports = { renderOrder, postBasket, sendlerOrder };
