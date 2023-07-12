const express = require('express')
const router = express.Router()
const checkPlayer = require('../interceptors/PlayCheck')
const {play,leaveGame, getPosition, get_url} = require('../services/UserGameService');

router.post('/play', checkPlayer, async (req, res) => {
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
    let result = await leaveGame(res.locals.id, req.body.room_id);
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

router.get('/get_board', async(req, res) => {
    try{
        let result = await getPosition(req.query.room_id);
        let url = await get_url(req.query.room_id);
        console.log(url[0][0])
        res.json({positions: result, url: url[0][0]});
    }catch(err){
        res.send(err.message).status(400);
    }
})

module.exports = router;

