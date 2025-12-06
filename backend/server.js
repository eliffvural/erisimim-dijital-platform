// backend/server.js

const express = require('express');
const cors = require('cors'); // CORS middleware'i
const { connectDB, sequelize } = require('./config/db'); 
const resourceRoutes = require('./routes/resourceRoutes'); // Rotalar
const Resource = require('./models/Resource'); 

// Veritabanı bağlantısını başlat
connectDB();

// Veritabanı tablolarını senkronize et (Eğer tablo yoksa oluşturur)
sequelize.sync({ alter: true })
    .then(() => {
        console.log("Veritabanı senkronizasyonu tamamlandı.");
    })
    .catch(err => console.log("Veritabanı senkronizasyonunda hata:", err));

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware'ler
app.use(cors()); // Frontend'den gelen istekleri kabul et
app.use(express.json()); // JSON formatındaki isteği okuyabilmek için

// API Rotaları
app.use('/api/resources', resourceRoutes); // Kaynak rotalarını ekle

app.get('/', (req, res) => {
    res.send('API çalışıyor...');
});

app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});