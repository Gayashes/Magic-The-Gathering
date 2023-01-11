const render = require('../lib/render');
const Main = require('../views/Main');
const { Card } = require('../../db/models');

const renderHome = async (req, res) => {
  // const allCard = await Card.findAll();
  const allCard = [{
    link: 'https://pepelsbey.net/pres/web-in-curves/pictures/hypnotoad.png',
    title: '2',
    status: true,
    id: 1,
  },
  {
    link: 'https://pepelsbey.net/pres/web-in-curves/pictures/hypnotoad.png',
    title: '21',
    status: true,
    id: 1,
  },
  {
    link: 'https://pepelsbey.net/pres/web-in-curves/pictures/hypnotoad.png',
    title: '211',
    status: true,
    id: 1,
  },
  {
    link: 'https://pepelsbey.net/pres/web-in-curves/pictures/hypnotoad.png',
    title: '211',
    status: true,
    id: 1,
  },
  {
    link: 'https://pepelsbey.net/pres/web-in-curves/pictures/hypnotoad.png',
    title: '211',
    status: true,
    id: 1,
  },
  {
    link: 'https://pepelsbey.net/pres/web-in-curves/pictures/hypnotoad.png',
    title: '211',
    status: true,
    id: 1,
  },
  ];
  const user = req.session?.userName;
  render(Main, { allCard, user }, res);
};

module.exports = renderHome;
