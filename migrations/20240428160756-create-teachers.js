"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Teachers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      full_name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
      },
      aadhar_number: {
        type: Sequelize.STRING,
        unique: true,
      },
      account_number: {
        type: Sequelize.STRING,
        unique: true,
      },
      pan_number: {
        type: Sequelize.STRING,
        unique: true,
      },
      qualification: {
        type: Sequelize.STRING,
        enum: ["B.Tech", "M.Tech", "Phd"],
        allowNull: true,
      },
      year_of_expreance: {
        type: Sequelize.STRING,
        enum: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        allowNull: true,
      },
      role: {
        type: Sequelize.STRING,
        enum: ["teacher", "admin"],
        defaultValue: "teacher",
      },
      token: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      refreshToken: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Teachers");
  },
};
