const render = require('../lib/render');
const Cabinet = require('../views/Cabinet');
const { Card, User } = require('../../db/models');

const renderCabinet = (req, res) => {
  try {
    render(Cabinet, null, res);
  } catch (error) {
    console.log(error);
  }
};

const postCabinet = async (req, res) => {
  try {
    const {
      title, cost, link, description, condition,
    } = req.body;
    console.log(title, cost, link, description, condition);
    await Card.create({
      title, cost, link, condition, status: true, user_id: 1,
    });
    res.redirect('/cabinet');
  } catch (err) {
    console.log(err);
    res.send('<script>alert("ошибка в кабинет контроллер")</script>');
  }
};

module.exports = { renderCabinet, postCabinet };
