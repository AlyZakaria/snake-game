const express = require('express')
const router = express.Router()

const {UserGame} = require('../models')

router.post('/play', (req, res) => {
    
    res.send('not implemented')
})

router.post('/leave', (req, res) => {
    res.send('not implemented')
})

router.get('/getPosition', (req, res) => {
    res.send('not implemented')
})


