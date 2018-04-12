'use strict'
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const db = require('./db');
const pg = require('pg');
const PORT = process.env.PORT || 8080
const app = express()

app.use(morgan('dev'))

// body parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// static file-serving middleware
app.use(express.static(path.join(__dirname, '../public')))

app.use('/api', require('./apiRoutes')); // include our routes!

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

db.sync({force:true})
.then(function(){
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`))
})


