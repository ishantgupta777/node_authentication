const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

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
    },
    tokens : [{
        token : {
            type : String,
            required : true
        }
    }]
},{
    timestamps : true
})


//------------------hashes the plain text password-------------------
UserSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,8)
    }
})


//-----------get the token after login and signup ------------------
UserSchema.methods.getToken = async function(){
   try{
    const user = this

    const token = jwt.sign({user},process.env.JWT_TOKEN)
    user.tokens = await user.tokens.concat({token})
    await user.save()

    return token
   }catch(err){
       console.log(err)
   }
}

const User = mongoose.model('user',UserSchema)

module.exports = User