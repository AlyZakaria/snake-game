const express = require('express')
const app = express()
const port = 3001

const db = require('./models')


db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
})


