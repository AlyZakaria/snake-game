const express = require('express')
const router = express.Router()

const {Game} = require('../models')

router.post('/create', (req, res) => {
    // call the service function (req.data)
    res.send('not implemented')
})

router.post('/join', (req, res) => {
    res.send('not implemented')
})

router.get('/getAll', (req, res) => {
    res.send('not implemented')
})


