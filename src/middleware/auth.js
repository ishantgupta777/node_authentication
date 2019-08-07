const jwt = require('jsonwebtoken')
const User = require('../database/user')

const auth = async (req,res,next)=>{
    try{
        const decoded = jwt.verify(req.body.data,process.env.JWT_TOKEN)
        next()
    }catch(err){
        return res.status(500).send()
    }
}

module.exports = auth