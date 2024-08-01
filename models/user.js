// models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme a localização do seu arquivo de configuração do banco de dados

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  cidade: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.STRING(2),
  },
  estilos: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
  },
}, {
  schema: 'sys',
  tableName: 'user',
  timestamps: false, // Defina como true se quiser que Sequelize gerencie createdAt e updatedAt automaticamente
});

module.exports = User;