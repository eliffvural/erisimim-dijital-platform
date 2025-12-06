// backend/models/Resource.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Resource = sequelize.define('Resource', {
    // Anahtar Alan
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    // Filtreleme ve Arama Alanları (Ara Raporda belirtilenler)
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Her kaynak URL'si tek olmalı
    },
    description: {
        type: DataTypes.TEXT,
    },
    engel_turu: {
        type: DataTypes.STRING, // Örn: 'Görme', 'İşitme', 'Öğrenme Güçlüğü'
        allowNull: false,
    },
    ders_konusu: {
        type: DataTypes.STRING, // Örn: 'Yazılım', 'Matematik'
        allowNull: false,
    },
    egitim_seviyesi: {
        type: DataTypes.STRING, // Örn: 'Lise', 'Üniversite', 'Temel'
        allowNull: false,
    },
    is_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, // Varsayılan olarak doğrulanmamış
    }
}, {
    // Model seçenekleri
    tableName: 'resources'
});

module.exports = Resource;