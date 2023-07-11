const express = require("express");
const app = express();
const port = 3001;


const db = require('./models')
const authController = require('./controllers/AuthController');     
const userGameController = require('./controllers/UserGameController');
const gameController = require('./controllers/GameController');
const Board = require('./controllers/Board');

const { checkUser } = require('./interceptors/Authorize');
const { exec } = require('child_process');

const seedProcess = exec('npm run seed');
seedProcess.on('exit', (code, signal) => {
  if (code === 0) {
    console.log('Seed completed successfully');
  } else {
    console.error(`Seed failed with code ${code} and signal ${signal}`);
  }
});
app.use(express.json())
app.use('/auth', authController)
app.use('*', checkUser);
app.use('/usergame',userGameController);
app.use("/game", gameController);
app.use("/board", Board);



db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
