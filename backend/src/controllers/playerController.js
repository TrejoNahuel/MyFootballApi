const Player = require('../models/player');
const { Op } = require('sequelize')

exports.getAllPlayers = async (req, res) => {
    try {
        // Obtenemos los nuevos parámetros de la URL
        const { page = 1, limit = 20, name, nationality, sortBy = 'overall', order = 'DESC' } = req.query;
        const offset = (parseInt(page) - 1) * parseInt(limit);

        const options = {
            limit: parseInt(limit),
            offset: offset,
            where: {},
            order: [[sortBy, order]] // Permite ordenar x cualquier columna
        };

        // Filtro por nombre 
        if (name) {
            options.where.long_name = { [Op.like]: `%${name}%` };
        }

        // Filtro por nacionalidad
        if (nationality) {
            options.where.nationality_name = { [Op.like]: `%${nationality}%` };
        }

        const { count, rows } = await Player.findAndCountAll(options);

        res.json({
            totalItems: count,
            totalPages: Math.ceil(count / limit),
            currentPage: parseInt(page),
            players: rows
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};