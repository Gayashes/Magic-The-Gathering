const render = require('../lib/render');
const Cabinet = require('../views/Cabinet');
const { Card, User } = require('../../db/models');

const renderCabinet =  async(req, res) => {
  try {
    const user = req.session?.userName;
    const user_id = req.session?.userId;
    const userCards = await Card.findAll({ where: { user_id }, raw: true });
    console.log('карточки юзера по айди', userCards);
    render(Cabinet, { user, userCards }, res);
  } catch (error) {
    console.log(error);
  }
};

const postCabinet = async (req, res) => {
  try {
    const Id = req.session.userId;
    const {
      title, cost, link, description, condition,
    } = req.body;
    await Card.create({
      title, cost, link, description, condition, status: true, user_id: Id,
    });
    res.redirect('/cabinet');
  } catch (err) {
    console.log(err);
    res.send('<script>alert("ошибка в кабинет контроллер")</script>');
  }
};

const deleteCabinet = async (req, res) => {
  try {
    await Card.destroy({ where: { id: req.params.id } });
    res.redirect('/cabinet');
  } catch (error) {
    console.log('ERROR DELETE==>', error);
  }
};

module.exports = { renderCabinet, postCabinet, deleteCabinet };
