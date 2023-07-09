const express = require("express");
const router = express.Router();

const { Game } = require("../models");
const { userGame } = require("../models");

const { join } = require("../services/GameService");

router.post("/create", async (req, res) => {
  res.send("not implemented");
});

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

router.get("/getAll", (req, res) => {
  res.send("not implemented");
});

module.exports = router;
