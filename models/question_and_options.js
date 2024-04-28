"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Question_and_Options extends Model {
    static associate(models) {}

    setIsCorrectIsWrongIsSkipped() {
      this.is_correct = this.correct_option === this.answer_given;
      this.is_wrong =
        this.correct_option !== this.answer_given && this.answer_given !== null;
      this.is_skipped = this.answer_given === null;

      return this;
    }
  }

  Question_and_Options.init(
    {
      question: DataTypes.STRING,
      option_1: DataTypes.STRING,
      option_2: DataTypes.STRING,
      option_3: DataTypes.STRING,
      correct_option: DataTypes.STRING,
      answer_given: DataTypes.STRING,
      is_correct: DataTypes.BOOLEAN,
      is_skipped: DataTypes.BOOLEAN,
      is_wrong: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Question_and_Options",
      hooks: {
        beforeSave: async (questionAndOptions, options) => {
          questionAndOptions.setIsCorrectIsWrongIsSkipped();
        },
      },
    }
  );

  return Question_and_Options;
};
