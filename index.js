const express = require('express')
const { connectDatabase } = require('./database/Config')
require('dotenv').config()
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
connectDatabase()


app.use('/api/' , require('./routers/heroe'))
app.use('/api/' , require('./routers/user'))


app.listen(process.env.PORT ,() => {
     console.log(process.env.PORT);
})

