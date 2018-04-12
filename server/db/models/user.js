const Sequelize = require('sequelize')
const db = require('../db.js')

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('password')
    }
  },
  guests: {
      type: Sequelize.INTEGER,
      unique:true,
      allowNull:false,
      defaultValue: '0'
  }
})

module.exports = User