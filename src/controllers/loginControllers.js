const bcrypt = require('bcrypt');
const render = require('../lib/render');
const Login = require('../views/Login');
const { User } = require('../../db/models');

const renderLogin = (req, res) => {
  render(Login, null, res);
};

const loginUser = async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await User.findOne({ where: { name } });
    if (user) {
      const passCheck = await bcrypt.compare(password, user.password);
      if (passCheck) {
        req.session.userName = user.name;
        req.session.userId = user.id;
        req.session.save(() => {
          res.redirect('/');
        });
      } else {
        res.redirect('/login');
      }
    } else {
      res.redirect('/registration');
    }
  } catch (error) {
    res.send(`ERROR---> ${error}`);
  }
};

module.exports = { renderLogin, loginUser };
