const render = require('../lib/render');
const Main = require('../views/Main');

const renderHome = (req, res) => {
  const user = req.session?.userName;
  render(Main, { user }, res);
};

module.exports = { renderHome };
