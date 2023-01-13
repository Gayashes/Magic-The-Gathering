const bcrypt = require('bcrypt');
const render = require('../lib/render');
const Regist = require('../views/Registration');

const { User } = require('../../db/models');

const regUser = async (req, res) => {
  const {
    name, password, email, city,
  } = req.body;
  try {
    const hash = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      city, email, name, password: hash,
    });
    req.session.userName = newUser.name;
    req.session.userId = newUser.id;
    req.session.location = newUser.city;
    req.session.email = newUser.email;
    req.session.save(() => {
      res.redirect('/');
    });
  } catch (error) {
    // res.send(`Error ------> ${error}`);
    console.log(error);
  }
};

module.exports = regUser;
