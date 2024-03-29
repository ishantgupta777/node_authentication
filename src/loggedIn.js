const express = require('express')
const path = require('path')
const auth = require('./middleware/auth')

const router = express.Router()

router.post('/loggedIn',auth,(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/loggedIn.html'))
})

module.exports = router