const Sequelize = require('sequelize');
const Op = Sequelize.Op

const db = new Sequelize('postgres://localhost:5432/weddingPlanner', {
  logging: false 
});

module.exports = db;