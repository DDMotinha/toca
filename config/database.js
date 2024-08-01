// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'senha', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;