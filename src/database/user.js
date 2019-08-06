const mongoose = require('mongoose')
const validator = require('validator')

const UserSchema =  mongoose.Schema({
    email : {
        type : String,
        required : true,
        trim : true,
        lowercase : true,
        unique : true,
        validator : (value)=>{
           return validator.isEmail(value)
        }
    },
    password : {
        type : String,
        required : true,
        trim : true
    }
},{
    timestamps : true
})

const User = mongoose.model('user',UserSchema)

module.exports = User