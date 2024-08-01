// models/party.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme a localização do seu arquivo de configuração do banco de dados

const Party = sequelize.define('Party', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  partylink: {
    type: DataTypes.STRING,
  },
  estilos: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  cidade: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.STRING(2),
  },
  partydate: {
    type: DataTypes.DATE,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  schema: 'sys',
  tableName: 'party',
  timestamps: false, // Defina como true se quiser que Sequelize gerencie createdAt e updatedAt automaticamente
});

module.exports = Party;