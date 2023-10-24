const asyncHandler = require('express-async-handler');
const Vehicle = require('../models/vehicles');
const generateToken = require('../util/generateToken');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://nemanjaranit:e9NGQzxtp00tfLef@cluster0.60gcb2c.mongodb.net/?retryWrites=true&w=majority';


const addVehicle = async(req,res)=>{
    const{Brand,Model,Price,Type,FuelType,Consumption,Manager,numberOfDoors} = req.body;   
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db()
    const vehicle = await Vehicle.create({
        Brand,Model,Price,Type,FuelType,Consumption,Manager,numberOfDoors
    });

    if(vehicle){
        res.status(201).json({
            _id:vehicle._id,
            Brand:vehicle.Brand,
            Model:vehicle.Model,
            Price:vehicle.Price,
            Type:vehicle.Type,
            FuelType:vehicle.FuelType,
            Consumption:vehicle.Consumption,
            numberOfDoors:vehicle.NumberOfDoors
        })
    }else{
        res.status(400);
        throw new Error("Error Occured!");
    }

    const object = await db.collection('rentacarobjects').findOne({Manager:Manager});
    const vehicleId = vehicle._id;
    db.collection('rentacarobjects').updateOne({Manager:Manager},{$push:{'Vehicles': vehicleId.valueOf()}});
    
}

const getVehicleById = async(req, res) => {
    try {
        const vehicleData = await Vehicle.findById(req.params.vehicleId);

        if(vehicleData){
            res.json(vehicleData);
            return vehicleData;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error retrieving vehicle data', error);
    }
};


module.exports = {addVehicle, getVehicleById};