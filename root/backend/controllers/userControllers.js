const asyncHandler = require('express-async-handler');
const User = require('../models/user');
const generateToken = require('../util/generateToken');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://nemanjaranit:e9NGQzxtp00tfLef@cluster0.60gcb2c.mongodb.net/?retryWrites=true&w=majority';

const registerUser = async(req,res) => {
    const {Name,Lastname,Sex,Email,Username,Password,BirthDate} = req.body;

    const userExists = await User.findOne({Username});

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

const editProfile = async(req,res)=>{
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db()
    const {Name,Lastname,Email,Username,NewUsername,BirthDate} = req.body;
    console.log(NewUsername);
        
    if(Name){
        db.collection('users').updateOne({Username: Username},{$set:{Name:Name}});    
    }
    if(Lastname){
        db.collection('users').updateOne({Username: Username},{$set:{Lastname:Lastname}});    
    }
    if(Email){
        db.collection('users').updateOne({Username: Username},{$set:{Email:Email}});    
    }
    if(BirthDate){
        db.collection('users').updateOne({Username: Username},{$set:{BirthDate:BirthDate}});    
    }
    if(NewUsername){
        db.collection('users').updateOne({Username: Username},{$set:{Username:NewUsername}});    
    }
}

const getAllNames = asyncHandler(async(req, res)=>{
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db()
    const users = await db.collection('users').find({}, { projection: { Name: 1,Lastname:1,Username:1,_id:0} }).toArray();
    console.log(users);
    res.json(users);
    return users;
});

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
            IsAdmin: user.isAdmin,
            IsManager: user.isManager,
            BirthDate:  user.BirthDate,
            token:generateToken(user._id),
        })
        console.log(user);
    }else{
        res.status(400);
        throw new Error("Invalid log in data");
    }
});
module.exports = {registerUser,editProfile, logIn,getAllNames};