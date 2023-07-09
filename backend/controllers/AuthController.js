const express = require('express')
const router = express.Router()

const {Users} = require('../models')

router.post('/signup', (req, res) => {
    // call the service function (req.data)
    res.send('not implemented')
})

router.post('/signin', (req, res) => {
    res.send('not implemented')
})

router.get('/signout', (req, res) => {
    res.send('not implemented')
})


