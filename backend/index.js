const express = require('express')
const app = express()
const port = 3001

const db = require('./models')
const authController = require('./controllers/AuthController')
const gameController = require('./controllers/GameController')
const boardController = require('./controllers/Board')
const { checkUser } = require('./interceptors/Authorize');

app.use(express.json())
app.use(express.static('public'))

app.use('/auth', authController)
app.use('/game', gameController)
app.use('/board', boardController)
//app.use('*', checkUser)


db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
})



