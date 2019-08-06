const express = require('express')
const path = require('path')
const signupRoute = require('./signup')
const loggedInRoute = require('./loggedIn')
const signIN = require('./signin')
const connection = require('../src/database/connection')
const bodyParser = require('body-parser')

const publicPath = path.join(__dirname,'../public')

const app = express()

app.use(express.static(publicPath))
app.use(signupRoute)
app.use(loggedInRoute)
app.use(signIN)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`)
})