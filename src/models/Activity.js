const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("activity", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    difficulty: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"),
      autoincrement: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      autoincrement: false,
    },
    season: {
      type: DataTypes.ENUM("Primavera", "Verano", "Otoño", "Invierno"),
    },
  });
};
