const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Player = sequelize.define('Player', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fifa_version: { type: DataTypes.STRING, allowNull: false },
  long_name: { type: DataTypes.STRING, allowNull: false },
  player_positions: { type: DataTypes.STRING, allowNull: false },
  club_name: { type: DataTypes.STRING },
  nationality_name: { type: DataTypes.STRING },
  overall: { type: DataTypes.INTEGER },
  potential: { type: DataTypes.INTEGER },
  age: { type: DataTypes.INTEGER },
  pace: { type: DataTypes.INTEGER },
  shooting: { type: DataTypes.INTEGER },
  passing: { type: DataTypes.INTEGER },
  dribbling: { type: DataTypes.INTEGER },
  defending: { type: DataTypes.INTEGER },
  physic: { type: DataTypes.INTEGER }
}, {
  tableName: 'players', // Asegura que apunte a la tabla que importaste
  timestamps: false     // Importante: false porque tu tabla no tiene createdAt/updatedAt
});

module.exports = Player;