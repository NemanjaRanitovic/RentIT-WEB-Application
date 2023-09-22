const asyncHandler = require('express-async-handler');
const User = require('../models/user');
const generateToken = require('../util/generateToken');

const registerUser = async(req,res) => {
    const {Name,Lastname,Sex,Email,Username,Password,BirthDate} = req.body;

    const userExists = await User.findOne({Email});

    if(userExists){
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        Name,Lastname,Sex,Email,Username,Password,BirthDate
    });

    if(user){   
        res.status(201).json({
            _id:    user._id,
            Name:   user.Name,
            Lastname:   user.Lastname,
            Sex:    user.Sex,
            Email:  user.Email,
            BirthDate:  user.Email,
            token:generateToken(user._id),
        });
    }else{
        res.status(400);
        throw new Error("Error Occured!");
    }
}

const logIn = asyncHandler(async(req,res)=>{
    const {Username,Password} = req.body;
    const user = await User.findOne({Username});
    if(user && (await user.matchPassword(Password))){
        res.json({
            _id:    user._id,
            Username: user.Username,
            Name:   user.Name,
            Lastname:   user.Lastname,
            Sex:    user.Sex,
            Email:  user.Email,
            BirthDate:  user.BirthDate,
            token:generateToken(user._id),
        })
        console.log(user);
    }else{
        res.status(400);
        throw new Error("Invalid log in data");
    }
});
module.exports = {registerUser, logIn};