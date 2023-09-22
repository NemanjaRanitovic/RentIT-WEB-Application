const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const vehicleSchema = new mongoose.Schema({
    Brand:{
        type: String,
        required: true
    },
    Model:{
        type: String,
        required: true,
    },
    Price:{
        type: Number,
        required: true
    },
    Type:{
        type: Number,
        enum:["Car", "Truck", "Motorcycle", "Other"],
        required: true
    },
    RentACarObject:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "RentACarObject"
    },
    Transmission:{
        type: String,
        enum: ["Manual", "Automatic"],
        required: true
    },
    FuelType:{
        type: String,
        enum: ["Gasoline", "Diesel", "Hybrid", "Other"],
        required: true
    },
    Consumption:{
        type: String
    },
    NumberOfDoors: {
        type: Number
    },
    NumberOfSeats: {
        type: Number
    },
    Description:{
        type: String
    },
    Image:{
        type: String
    },
    Status:{
        type: String,
        enum: ["Available", "Rented"],
        default: "Available"
    }
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;