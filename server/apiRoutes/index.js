'use stict'

const router = require('express').Router();
const db = require('../db')

router.use('/rooms', require('./rooms')); // matches all requests to  /api/rooms/

router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
  });
  

module.exports = router;