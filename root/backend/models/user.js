const mongoose = require('mongoose')
const bcrypt = require ('bcryptjs')

const userSchema = mongoose.Schema(
    {       
        Name:{
            type: String,
            required : true,
        },
        Lastname:{
            type: String,
            required: true,
        },
        Sex: {
          type: String,
          required: true,  
        },
        Email:{
            type:String,
            required: true,
            unique: true
        },
        Username:{
            type:String,
            required:true,
            unique:true,
        },
        Password:{
            type:String,
            required: true,            
        },
        isAdmin:{
            type:String,
            default: false,
        },
        isManager:{
            type:String,
            default:false,
        },
        BirthDate:{
            type:Date,
            required:true,
        }
    },
    {
        timestapms: true,
    }    
);

userSchema.pre('save',async function(next){
    if(!this.isModified('Password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.Password = await bcrypt.hash(this.Password,salt);
});

userSchema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword,this.Password);
}

const User=mongoose.model('Users',userSchema);
module.exports = User;