const render = require('../lib/render');
const Main = require('../views/Main');
const MainNoCard = require('../views/MainNoCard');
const OnecardMain = require('../views/OnecardMain');
const { Card } = require('../../db/models');

const renderHome = async (req, res) => {
  try {
    const allCard = await Card.findAll();
    const user = req.session?.userName;
    if (allCard.length) {
      render(Main, { allCard, user }, res);
    } else {
      render(MainNoCard, { allCard, user }, res);
    }
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }

};
const renserOneCardMain = async (req, res) => {
  try {
    const user = req.session?.userName;
    const user_id = req.session?.userId;
    const oneCard = await Card.findOne({ where: { id: req.params.id }, raw: true });
    render(OnecardMain, { user, oneCard }, res);
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
};

module.exports = {
  renderHome,
  renserOneCardMain,
};
