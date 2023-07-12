
const express = require("express");
const router = express.Router();
const {get_user_id} = require('../interceptors/Authorize')
const { Game } = require("../models");
const { userGame } = require("../models");
const {getPlayers, create, join, getAll} = require('../services/GameService')


router.post('/create', async(req, res) => {
    const id = res.locals.id
    console.log(id)
    console.log(`id = ${id}`)
    let game = req.body
    game.created_by = id
    game.current_user = id
    const created = await create(game);
    if (created == 'err'){
      res.status(400).json({message: created})
    }
    else{
      res.status(200).json({id: created.game_id});
    }
})

router.post("/join", async (req, res) => {
  try {
    const response = await join(req.body.game_id, res.locals.id);
    if (response.error) {
      return res.status(500).json(response);
    }
    return res.status(201).json({
      count: response.count,
      status: response.status,
      msg: response.msg,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

router.get('/getAll', async(req, res) => {
    const games = await getAll();
    res.json(games)
})


router.post('/getPlayers', async(req, res) => {
  const game_id = req.body.game_id;
  try{
    const users = await getPlayers(game_id);
    res.status(200).json(users)
  }
  catch(err){
    res.status(400).json({msg: 'error'})
  }
})
module.exports = router;




