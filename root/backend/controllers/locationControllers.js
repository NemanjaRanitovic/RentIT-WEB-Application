const { response } = require('express');
const asyncHandler = require('express-async-handler');
const Location = require('../models/locations');
const generateToken = require('../util/generateToken');

const newLocation = async(req,res) => {
    const {Street,Number,City,PostalCode,Latitude,Longitude} = req.body;

    const location = await Location.create({
        Street,Number,City,PostalCode,Latitude,Longitude
    });

    if(location){   
        res.status(201).json({
            _id:    location._id,
            Street:   location.Street,
            Number:   location.Number,
            City:    location.City,
            PostalCode:  location.PostalCode,
            Latitude:  location.Latitude,
            Longitude: location.Longitude,
            token:generateToken(location._id),
        });
    }else{
        res.status(400);
        throw new Error("Error Occured!");
    }
}

module.exports = {newLocation}
    