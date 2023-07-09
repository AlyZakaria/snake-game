const express = require("express");
const app = express();
const port = 3001;

const db = require("./models");
const authController = require("./controllers/AuthController");
const gameController = require("./controllers/GameController");

const { checkUser } = require("./interceptors/Authorize");

app.use(express.json());

app.use("/auth", authController);
app.use("/game", gameController);

// app.use("*", checkUser);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
