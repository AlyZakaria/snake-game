const express = require('express')
const router = express.Router()

const {UserGame} = require('../models')

const {play,leaveGame, getPosition} = require('../services/UserGameService');

router.post('/play', async (req, res) => {
    try{
        let result = await play(req.body.room_id);
        console.log(result);
        res.json(result);
    }catch(error){
        res.send(error.message).status(400);
    }

})

router.post('/leave', async (req, res) => {
    try{
    let result = await leaveGame(req.body.user_id, req.body.room_id);
    res.send("Leave Success");
    }catch(err){
    res.send(err.message).status(400);
    }
})

router.get('/positions', async (req, res) => {
    try{
        let result = await getPosition(req.query.room_id);
        res.json(result);
    }catch(err){
        res.send(err.message).status(400);
    }
})


module.exports = router;

