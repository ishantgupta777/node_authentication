const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/loggedIn',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/loggedIn.html'))
})

module.exports = router