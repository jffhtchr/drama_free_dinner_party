const Sequelize = require('sequelize')
const db = require('../db.js')

const Room = db.define('room', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    defaultValue:"MyRoom"
  },
  width: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  length: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
})

module.exports = Room