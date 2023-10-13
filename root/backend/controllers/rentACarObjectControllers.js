const { response } = require('express');
const asyncHandler = require('express-async-handler');
const generateToken = require('../util/generateToken');
const RentACarObject = require('../models/rentACarObjects');

const newRentACarObject = async(req,res)=>{
    const {Name,Location,Manager} = req.body;
    const rentACarObject = await RentACarObject.create({
        Name,Location,Manager
    });

    if(rentACarObject){
        res.status(201).json({
            _id:rentACarObject._id,
            Name:rentACarObject.Name,
            Location:rentACarObject.Location,
            Manager:rentACarObject.ManagerUsername
                      
        })
    }else{
        res.status(400);
        throw new Error("Error Occured!");
        
    }
}
module.exports = {newRentACarObject}