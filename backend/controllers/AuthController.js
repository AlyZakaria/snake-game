const express = require('express')
const router = express.Router()

const {Users} = require('../models')
const {signup, signin, signout} = require('../services/AuthService')

router.post('/signup', async (req, res) => {
    const response = await signup(req.body);
    res.json(response)

})

router.post('/signin', async (req, res) => {
    const response = await signin(req.body)
    res.json(response)
})

router.get('/signout', (req, res) => {
    res.send('not implemented')
})

module.exports = router;
