const express = require('express');

const route = express.Router();
const { Card } = require('../../db/models');
const render = require('../lib/render');
const Main = require('../views/Main');
<<<<<<< HEAD
route.get('/', (req, res) => {
  render(Main, null, res);
=======

route.get('/', async (req, res) => {
  // const allCard = await Card.findAll();
  const allCard = [{
    link: 'https://img2.joyreactor.cc/pics/post/%D0%B3%D0%B8%D0%BF%D0%BD%D0%BE%D0%B6%D0%B0%D0%B1%D0%B0-%D0%A4%D1%83%D1%82%D1%83%D1%80%D0%B0%D0%BC%D0%B0-%D0%9C%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B-Cryptid-Creations-2347739.png',
    title: '2',
    status: true,
    id: 1,
  },
  {
    link: 'https://wiki.godville.net/images/thumb/0/04/%D0%9F%D0%BE%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D0%B8_%D0%93%D0%B8%D0%BF%D0%BD%D0%BE%D0%B6%D0%B0%D0%B1%D1%8B_%28%D1%82%D0%BE%D1%82%D0%B5%D0%BC%29.jpg/250px-%D0%9F%D0%BE%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D0%B8_%D0%93%D0%B8%D0%BF%D0%BD%D0%BE%D0%B6%D0%B0%D0%B1%D1%8B_%28%D1%82%D0%BE%D1%82%D0%B5%D0%BC%29.jpg',
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
  ];
  const user = req.session?.userName;
  console.log('111111', allCard);
  render(Main, { allCard, user }, res);
>>>>>>> a10e5dec3b39843cb18c231e9cd4c23245bf8e20
});

module.exports = route;
