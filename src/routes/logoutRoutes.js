const express = require('express');

const route = express.Router();

route.get('/', async (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('magicCookie');
    res.redirect('/');
  });
});

module.exports = route;
