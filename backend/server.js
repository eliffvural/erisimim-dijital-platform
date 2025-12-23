const express = require('express');
const cors = require('cors');
const { connectDB, sequelize } = require('./config/db');
const resourceRoutes = require('./routes/resourceRoutes');

const app = express();

// Middleware
app.use(cors()); // Frontend erişimi için şart!
app.use(express.json());

// Veritabanı
connectDB();
sequelize.sync({ alter: true }); // Tabloları otomatik oluşturur

// Rotalar
app.use('/api/resources', resourceRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Sunucu http://localhost:${PORT} adresinde aktif.`));