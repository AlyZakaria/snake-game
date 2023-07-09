const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
const db = require('./models')
const authController = require('./controllers/AuthController')
const userGameController = require('./controllers/UserGameController')
const { checkUser } = require('./interceptors/Authorize');

app.use(express.json())
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded())
// app.use(bodyParser.urlencoded({
//     extended: true
//   }));

app.use('/auth', authController)
app.use('/usergame', userGameController)
app.use('*', checkUser)



db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
})



