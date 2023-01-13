const sequelize = require('sequelize');

const render = require('../lib/render');
const Main = require('../views/Main');
const MainNoCard = require('../views/MainNoCard');
const OnecardMain = require('../views/OnecardMain');
const Error = require('../views/Error');
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
    render(Error, {
      message: '333Невозможно отобразить страницу, но мы над этим уже работаем, попробуйте позже',
      error: {},
    }, res);
  }
};
const renserOneCardMain = async (req, res) => {
  try {
    const user = req.session?.userName;
    const oneCard = await Card.findOne({ where: { id: req.params.id }, raw: true });
    render(OnecardMain, { user, oneCard }, res);
  } catch (error) {
    render(Error, {
      message: '111Невозможно отобразить страницу товаров, но мы над этим уже работаем, попробуйте позже',
      error: {},
    }, res);
  }
};
const renderMainFilter = async (req, res) => {
  try {
    const { filter } = req.body;
    // console.log("aaaaaa", filter)
    const user = req.session?.userName;
    const allCard = await Card.findAll({ where: { location: filter }, raw: true });
    // console.log(allCard);
    render(Main, { user, allCard }, res);
  } catch (error) {
    render(Error, {
      message: 'Невозможно отобразить страницу фильрации, но мы над этим уже работаем, попробуйте позже',
      error: {},
    }, res);
  }
};

const renderSearch = async (req, res) => {
  try {
    const { titlesearch } = req.body;
    const titlesearchreg = titlesearch.toLowerCase();
    // console.log('aaaaaa', titlesearch);
    const user = req.session?.userName;
    const allCard = await Card.findAll({
      where: sequelize.where(
        sequelize.fn('lower', sequelize.col('title')),
        'LIKE',
        `%${titlesearchreg}%`,
      ),
    });
    // console.log(allCard);
    render(Main, { user, allCard }, res);
  } catch (error) {
    console.log(error);
    render(Error, {
      message: 'Невозможно отобразить страницу поиска, но мы над этим уже работаем, попробуйте позже',
      error: {},
    }, res);
  }
};
module.exports = {
  renderHome,
  renserOneCardMain,
  renderMainFilter,
  renderSearch,
};
