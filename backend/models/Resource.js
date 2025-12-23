const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Resource = sequelize.define('Resource', {
    title: { type: DataTypes.STRING, allowNull: false },
    url: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    engel_turu: { type: DataTypes.STRING }, // İşitme, Görme, vb.
    ders_konusu: { type: DataTypes.STRING },
    egitim_seviyesi: { type: DataTypes.STRING },
    is_verified: { type: DataTypes.BOOLEAN, defaultValue: false }
});

module.exports = Resource;