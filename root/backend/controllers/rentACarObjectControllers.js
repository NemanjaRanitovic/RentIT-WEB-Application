const { response } = require('express');
const asyncHandler = require('express-async-handler');
const generateToken = require('../util/generateToken');
const RentACarObject = require('../models/rentACarObjects');
const MongoClient = require('mongodb/lib/mongo_client');
const url = 'mongodb+srv://nemanjaranit:e9NGQzxtp00tfLef@cluster0.60gcb2c.mongodb.net/?retryWrites=true&w=majority';

const newRentACarObject = async(req,res)=>{
    const {Name,Location,Manager,Street,City,Number,Latitude,Longitude} = req.body;
    const rentACarObject = await RentACarObject.create({
        Name,Location,Manager,Street,City,Number,Latitude,Longitude
    });

    if(rentACarObject){
        res.status(201).json({
            _id:rentACarObject._id,
            Name:rentACarObject.Name,
            Location:rentACarObject.Location,
            Manager:rentACarObject.ManagerUsername,
            Street:rentACarObject.Street,
            Number:rentACarObject.Number,
            City:rentACarObject.City,
            Latitude:rentACarObject.Latitude,
            Longitude:rentACarObject.Longitude
                      
        })
    }else{
        res.status(400);
        throw new Error("Error Occured!");
        
    }
}

const getAllObjects = asyncHandler(async(req, res)=>{
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db()
    const objects = await db.collection('rentacarobjects').find({}, { projection: { Name:1,Location:1,Street:1,Number:1,City:1,Latitude:1,Longitude:1,Description:1,Image:1,AverageRate:1,_id:1} }).toArray();
    console.log(objects);
    res.json(objects);
    return objects;
});

const getObjectById = async(req,res) => {
    try {
      const objectData = await RentACarObject.findById(req.params.objectId);
  
      if (objectData) {
        res.json(objectData);
        return objectData;
      } else {
        return null; 
      }
    } catch (error) {
      console.error('Error retrieving location data:', error);
      throw error;
    }
};

module.exports = {newRentACarObject, getAllObjects, getObjectById}
