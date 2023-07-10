const express = require("express");
const router = express.Router();

const { Users } = require("../models");
const { signup, signin, createToken } = require("../services/AuthService");

router.post("/signup", async (req, res) => {
  const response = await signup(req.body);
  const token = createToken(response)
  res.json({token: token});
});

router.post("/signin", async (req, res) => {
  console.log(req.body);
  const response = await signin(req.body.username, req.body.password);
  if (response === "Wrong password" || response === "Error Finding User") {
    res.status(400).json({ message: response });
  } else {
    res.cookie("jwt", response, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json({ response });
  }
});

router.get("/signout", (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.status(200).json({ message: "logged out" });
});

module.exports = router;
