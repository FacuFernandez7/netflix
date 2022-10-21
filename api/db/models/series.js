'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Series extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Series.init({
    title: DataTypes.STRING,
    synopsis: DataTypes.STRING,
    score: DataTypes.INTEGER,
    genre: DataTypes.ENUM('action', 'adventure', 'animated', 'comedy', 'drama', 'horror'),
    seasons: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Series',
  });
  return Series;
};