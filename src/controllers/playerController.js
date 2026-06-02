const Player = require('../models/player');
const { Op } = require('sequelize');

exports.getAllPlayers = async (req, res) => {
    try {
        const { page = 1, limit = 20, name } = req.query;
        const offset = (parseInt(page) - 1) * parseInt(limit);

        const options = {
            limit: parseInt(limit),
            offset: offset,
            where: {}
        };

        if (name) {
            options.where.long_name = { [Op.like]: `%${name}%` };
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