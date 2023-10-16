const { response } = require('express');
const asyncHandler = require('express-async-handler');
const MongoClient = require('mongodb/lib/mongo_client');
const Location = require('../models/locations');
const generateToken = require('../util/generateToken');
const url = 'mongodb+srv://nemanjaranit:e9NGQzxtp00tfLef@cluster0.60gcb2c.mongodb.net/?retryWrites=true&w=majority';

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

const getLocationById = async(req,res) => {
    try {
      const locationData = await Location.findById(req.params.locationId);
  
      if (locationData) {
        res.json(locationData);
        return locationData;
      } else {
        return null; 
      }
    } catch (error) {
      console.error('Error retrieving location data:', error);
      throw error;
    }
};

const getAllLocations = asyncHandler(async(req, res)=>{
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db()
    const locations = await db.collection('locations').find({}, { projection: { Street: 1,Number:1,City:1,Latitude:1,Longitude:1,_id:1} }).toArray();
    console.log(locations);
    res.json(locations);
    return locations;
});

module.exports = {newLocation, getLocationById, getAllLocations}
    