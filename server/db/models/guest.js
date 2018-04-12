const Sequelize = require('sequelize')
const db = require('../db.js')

const Guest = db.define('guest', {
  firstName: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: true
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
})

module.exports = User