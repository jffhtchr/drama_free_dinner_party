const router = require('express').Router();
const models = require('../db/models');
const Room = models.Room;

router.get('/', function (req, res, next) { 
    Room.findAll()
    .then(rooms => res.json(rooms))
    .catch(next)
});

router.post('/', function (req, res, next) { 
    Room.create(req.body)
    .then((room) => res.json(room))
    .catch(next)
});

router.put('/:roomId', function (req, res, next) { /* etc */});

router.delete('/:roomId', function (req, res, next) { /* etc */});

module.exports = router;