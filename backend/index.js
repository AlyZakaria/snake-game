const express = require('express')
const app = express()
const port = 3001

const db = require('./models')
const authController = require('./controllers/AuthController')
const { checkUser } = require('./interceptors/Authorize');

app.use(express.json())
app.use('*', checkUser)
app.use('/auth', authController)
app.use('/usergame',userGameController);


db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
})



