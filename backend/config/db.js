const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('erisimim_db', 'postgres', 'Eelf.7821+', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false, // Konsol kirliliğini önlemek için
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('PostgreSQL bağlantısı başarıyla kuruldu.');
    } catch (error) {
        console.error('Bağlantı hatası:', error);
    }
};

module.exports = { sequelize, connectDB };