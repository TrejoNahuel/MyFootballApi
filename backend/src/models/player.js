const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Player = sequelize.define('Player', {
    // Ajusta estos campos según tu tabla real en MariaDB
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    long_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nationality_name: {
        type: DataTypes.STRING
    },
    overall: {
        type: DataTypes.INTEGER
    },
    club_name: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'players', // Nombre exacto de tu tabla en la BD
    timestamps: false     // Pon 'true' si tu tabla tiene columnas 'createdAt' y 'updatedAt'
});

module.exports = Player;