const mongoose = require("mongoose");
const bcrypt =  require("bcryptjs");

const rentACarObjectSchema = mongoose.Schema(
    {
        Name:{
            type: String,
            required: true,
        },
        Vehicles:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Vehicle"
            }
        ],
        Location:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Location"
        },
        WorkingHours:{
            type: String,
            required: true,
        },
        Status:{
            type: String,
            enum: ["Opened", "Closed"],
            default: "Opened"
        },
        Logo:{
            type: String,
            required: true
        },
        AverageRate:{
            type: Number
        },
    }
);

const RentACarObject = mongoose.model("RentACarObject", rentACarObjectSchema);

module.exports = RentACarObject;