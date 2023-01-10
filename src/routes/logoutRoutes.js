const express = require('express');

const route = express.Router();

route.get('/', async (req, res) => {
  if (req.session.newUser !== undefined) {
    req.session.destroy(() => {
      res.clearCookie('magicCookie');
      res.redirect('/');
    });
  } else {
    res.redirect('/');
  }
});

module.exports = route;
