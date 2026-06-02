const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

// Definimos la ruta para obtener jugadores
// La ruta final será /api/players
router.get('/players', playerController.getAllPlayers);

module.exports = router;