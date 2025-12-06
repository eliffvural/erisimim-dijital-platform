// backend/server.js (Güncellenmiş hali)

const express = require('express');
const { connectDB, sequelize } = require('./config/db'); 
const Resource = require('./models/Resource'); // Yeni eklenen satır

// Veritabanı bağlantısını başlat
connectDB();

// Veritabanı tablolarını senkronize et (Eğer tablo yoksa oluşturur)
sequelize.sync({ alter: true })
    .then(() => {
        console.log("Veritabanı senkronizasyonu tamamlandı.");
    })
    .catch(err => console.log("Veritabanı senkronizasyonunda hata:", err));

const app = express();
// ... Diğer app ayarları ve dinleme kodu