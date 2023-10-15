const { response } = require('express');
const asyncHandler = require('express-async-handler');
const generateToken = require('../util/generateToken');
const RentACarObject = require('../models/rentACarObjects');
const url = 'mongodb+srv://Nemkac:e9NGQzxtp00tfLef@cluster0.60gcb2c.mongodb.net/?retryWrites=true&w=majority';


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

const getAllObjects = asyncHandler(async(req, res)=>{
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db()
    const objects = await db.collection('rentacarobjects').find({}, { projection: { Name:1,Location:1,Description:1,Image:1,_id:1} }).toArray();
    console.log(objects);
    res.json(objects);
    return objects;
});

module.exports = {newRentACarObject, getAllObjects}
