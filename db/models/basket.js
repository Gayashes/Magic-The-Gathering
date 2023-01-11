'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Card}) {
      this.belongsTo(User, {
        foreignKey: 'user_id',
      });
      this.belongsTo(Card, {
        foreignKey: 'card_id',
      });
    }
  }
  Basket.init({
    card_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    user_id_buy: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};