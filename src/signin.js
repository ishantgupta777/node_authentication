const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const User = require('./database/user')
const mongoose = require('mongoose')

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

router.get('/signin',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/signin.html'))
})

router.post('/signin',async (req,res)=>{
    const user = await User.findOne({email : req.body.email})
    if(!user){
        return res.status(401).send()
    }

    const isPassCorrect = (user.password===req.body.password)

    if(!isPassCorrect){
        return res.status(500).send()
    }

    res.send()

})

module.exports = router