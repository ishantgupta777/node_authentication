const express = require('express')
const bodyParser = require('body-parser')
const User = require('./database/user')

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

router.post('/signup',async (req,res)=>{
    console.log('problem is not in signup.js post router')
   try{
    const user = new User(req.body)
    await user.getToken()
    await user.save()
    res.send(user.tokens[0].token)
   }catch{
       res.status(401).send()
   }
})


module.exports = router