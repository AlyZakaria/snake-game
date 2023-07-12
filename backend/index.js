const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

const { checkUser } = require('./interceptors/Authorize');
const authController = require('./controllers/AuthController');     
const userGameController = require('./controllers/UserGameController');
const gameController = require('./controllers/GameController');
const Board = require('./controllers/Board');



// Or, allow all origins with specific methods and headers
app.use(cors());



app.use(cors())
app.use(express.json())
app.use('/auth', authController)
app.use('*', checkUser);
app.use('/usergame',userGameController);
app.use("/game", gameController);
app.use("/board", Board);




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
