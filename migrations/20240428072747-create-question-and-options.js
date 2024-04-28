"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Question_and_Options", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      question: {
        type: Sequelize.STRING,
      },
      option_1: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      option_2: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      option_3: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      correct_option: {
        type: Sequelize.STRING,
      },
      answer_given: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      is_correct: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      is_skipped: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      is_wrong: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Question_and_Options");
  },
};
