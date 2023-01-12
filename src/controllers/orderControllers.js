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
    console.log('=================== айдишники', user_id, card_id);
    await Basket.create({ user_id, card_id, user_id_buy });
    res.end();
  } catch (error) {
    console.log(error);
  }
};

const sendlerOrder = async (req, res) => {
  console.log('======== МЭЙЛЕР');

  const emailSender = await User.findOne({ where: { id: req.session.userId } });
  console.log('========ОТ КОГО', emailSender.email);

  const emailRecipient = await Basket.findAll({ where: { user_id_buy: req.session.userId }, include: Card });

  emailRecipient.forEach((card) => {
    const message = {
      from: 'testovaya1@inbox.ru',
      to: card.Card.email,
      subject: 'Покупка через MTG_app', // заголовок
      text: `Поздравляем! Вашу карточку ${card.Card.title}, купили за ${card.Card.cost}`, // тест сообщения
    };
    mailer(message);
  });
  res.redirect('/');
};

module.exports = { renderOrder, postBasket, sendlerOrder };
