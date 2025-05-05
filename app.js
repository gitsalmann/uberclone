const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const cors = require('cors')
const connectToDb = require('./database/db')
const userRoutes = require('./routes/userRoutes')


connectToDb()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))









app.get('/', (req, res)=>{
  res.send('Hey, Welcome Back!')
})

app.use('/users', userRoutes)



module.exports = app