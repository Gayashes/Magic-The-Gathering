const express = require('express');

const router = express.Router();

const { renderBasket, postBasket } = require('../controllers/basketControllers');
const { Basket } = require('../../db/models');
const render = require('../lib/render');

router.get('/', renderBasket);
router.post('/', postBasket);
router.post('/delete/:id', async (req, res) => {
  const { id } = req.params;
//   console.log('=============================>>>>>>>>>>>', id);
  //   const currentUserId = req.session?.userName;
  try {
    const value = await Basket.destroy({ where: { id } });
    console.log('%%%%%', value);
    // if (value) {
    // }
    res.sendStatus(200);
    // if (currentUserId !== basket.user_id) {
    //   res.status(403)
    //     .send('ok');
    //   return;
    // }
    // res.send({
    //   message: 'Карточка успешно удалена',
    // });
  } catch (error) {
    res.send(`${error}`);
  }
});
module.exports = router;
