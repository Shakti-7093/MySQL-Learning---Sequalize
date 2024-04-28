"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Teachers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Teachers.init(
    {
      full_name: DataTypes.STRING,
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      aadhar_number: DataTypes.STRING,
      account_number: DataTypes.STRING,
      pan_number: DataTypes.STRING,
      qualification: DataTypes.STRING,
      year_of_expreance: DataTypes.STRING,
      role: DataTypes.STRING,
      token: DataTypes.STRING,
      refreshToken: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Teachers",
    }
  );
  return Teachers;
};
