const express = require('express')
const router = express.Router()
const {getAll, create, join} = require('../services/GameService')
const {Game} = require('../models')

router.post('/create', async(req, res) => {
    const game = req.body
    const created = await create(game);
    if (created == 'err'){
        res.status(400).json({message: created})
    }
    else{
        res.status(200).json({id: created.game_id});
    }
    
})

router.post('/join', async (req, res) => {
    res.send('not implemented')
})

router.get('/getAll', async (req, res) => {
    res.send('not implemented')
})

module.exports = router
