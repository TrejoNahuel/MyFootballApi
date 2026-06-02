const express = require('express');
const sequelize = require('./config/database');
const playerRoutes = require('./routes/playerRoutes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Usar rutas
app.use('/api/players', playerRoutes);

const PORT = process.env.PORT || 3000;

// Sincronizar y arrancar
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a base de datos establecida exitosamente.');
    return sequelize.sync(); // Esto crea las tablas si no existen
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
  })
  .catch(err => console.error('No se pudo conectar a la base de datos:', err));