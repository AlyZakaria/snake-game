const express = require('express')
const app = express()
const port = 3001

const db = require('./models')
const authController = require('./controllers/AuthController')

app.use(express.json())
app.use('/auth', authController)


db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
})



