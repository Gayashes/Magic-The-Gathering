const express = require('express');

const router = express.Router();

const { renderBasket, postBasket } = require('../controllers/basketControllers');
const { Basket, Card } = require('../../db/models');

router.get('/', renderBasket);
router.post('/', postBasket);
router.post('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const card = await Basket.findOne({ where: { id } });
    await Basket.destroy({ where: { id } });
    await Card.update({ status: true }, { where: { id: card.card_id } });
    res.sendStatus(200);
  } catch (error) {
    res.send(`${error}`);
  }
});
module.exports = router;
