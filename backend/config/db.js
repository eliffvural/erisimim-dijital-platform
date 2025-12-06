// backend/config/db.js

const { Sequelize } = require('sequelize');

// **ÖNEMLİ:** Buradaki bilgileri kendi PostgreSQL kurulumunuza göre doldurun.
const sequelize = new Sequelize('erisimim_db', 'postgres', 'sifreniz', {
    host: 'localhost',
    dialect: 'postgres', // PostgreSQL kullanıyoruz
    logging: false // Konsolda SQL sorgularını göstermemek için
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('PostgreSQL bağlantısı başarıyla kuruldu.');
    } catch (error) {
        console.error('PostgreSQL bağlantısı kurulamadı:', error);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };