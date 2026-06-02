require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas (Asegúrate de que esta ruta exista en src/routes/playerRoutes.js)
const playerRoutes = require('../src/routes/playerRoutes');
app.use('/api', playerRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    console.log(`DEBUG: DB_NAME: ${process.env.DB_NAME}`);
});