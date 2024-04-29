'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Answers.init({
    question_id: DataTypes.INTEGER,
    answer: DataTypes.STRING,
    is_correct: DataTypes.BOOLEAN,
    is_wrong: DataTypes.BOOLEAN,
    is_skipped: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Answers',
  });
  return Answers;
};