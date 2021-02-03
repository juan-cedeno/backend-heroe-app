const express = require('express')
const { connectDatabase } = require('./database/Config')
require('dotenv').config()

const app = express()
app.use(express.json())
connectDatabase()


app.listen(process.env.PORT ,() => {
     console.log(process.env.PORT);
})

