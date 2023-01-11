const render = require('../lib/render');
const Main = require('../views/Main');
const MainNoCard = require('../views/MainNoCard');
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

module.exports = renderHome;
