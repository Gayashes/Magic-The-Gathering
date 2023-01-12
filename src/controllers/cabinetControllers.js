const render = require('../lib/render');
const Cabinet = require('../views/Cabinet');
const Onecard = require('../views/Onecard');
const { Card, User } = require('../../db/models');

const renderCabinet = async (req, res) => {
  try {
    const user = req.session?.userName;
    const user_id = req.session?.userId;
    const userCards = await Card.findAll({ where: { user_id }, raw: true });
    render(Cabinet, { user, userCards }, res);
  } catch (error) {
    console.log('ERROR GET==>', error);
  }
};

const postCabinet = async (req, res) => {
  try {
    const Id = req.session.userId;
    const { location, email } = req.session;
    const {
      title, cost, link, description, condition,
    } = req.body;
    // const location = await
    await Card.create({
      title, cost, email, location, link, description, condition, status: true, user_id: Id,
    });
    res.redirect('/cabinet');
  } catch (error) {
    console.log('ERROR POST==>', error);
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

const changeCabinet = async (req, res) => {
  try {
    const user = req.session?.userName;
    const oneCard = await Card.findOne({ where: { id: req.params.id }, raw: true });
    render(Onecard, { user, oneCard }, res);
  } catch (error) {
    console.log('ERROR CHANGE==>', error);
  }
};

const saveCabinet = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title, cost, link, description, condition,
    } = req.body;
    // eslint-disable-next-line max-len
    await Card.update({
      title, cost, link, description, condition, status: true,
    }, { where: { id } });
    res.redirect('/cabinet');
  } catch (error) {
    console.log('ERROR SAVE==>', error);
    res.send('<script>alert("ошибка при сохранении")</script>');
  }
};

module.exports = {
  renderCabinet, postCabinet, deleteCabinet, changeCabinet, saveCabinet,
};
