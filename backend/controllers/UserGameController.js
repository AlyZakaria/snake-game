const express = require('express')
const router = express.Router()

const {UserGame} = require('../models')

const {play} = require('../services/UserGameService');

router.post('/play', (req, res) => {
    let result = play(req.body.room_id);
    res.json(result);
})

router.post('/leave', (req, res) => {
    res.send('not implemented')
})

router.get('/getPosition', (req, res) => {
    res.send('not implemented')
})


module.exports = router;

