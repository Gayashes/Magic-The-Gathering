'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, {
        foreignKey: 'user_id',
      });
    }
  }
  Card.init({
    title: DataTypes.STRING,
    link: DataTypes.STRING,
    cost: DataTypes.STRING,
    location: DataTypes.STRING,
    email: DataTypes.STRING,
    condition: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    description: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};
