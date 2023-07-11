
const express = require("express");
const router = express.Router();

const { Game } = require("../models");
const { userGame } = require("../models");
const {getAll, create, join} = require('../services/GameService')


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

router.post("/join", async (req, res) => {
  try {
    const response = await join(req.body.game_id, req.body.user_id);
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
    const games = await Game.findAll();
    res.json(games)
})
module.exports = router;




