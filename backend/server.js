const express = require('express');
const cors = require('cors'); // BU ÇOK ÖNEMLİ
const { connectDB, sequelize } = require('./config/db');
const resourceRoutes = require('./routes/resourceRoutes');

const app = express();
app.use(cors()); // Bütün frontend isteklerine izin ver
app.use(express.json());

connectDB();
sequelize.sync();

app.use('/api/resources', resourceRoutes);

app.listen(5000, () => console.log("Backend 5000 portunda hazır!"));