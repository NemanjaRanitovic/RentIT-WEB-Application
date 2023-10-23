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
        type: String,
        required: true
    },
    FuelType:{
        type: String,
        enum: ["Petrol", "Diesel"],
        required: true
    },
    Consumption:{
        type: String
    },
    NumberOfDoors: {
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