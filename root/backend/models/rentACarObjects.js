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
        Manager:{
            type:String,
            required:true
        },
        Location:{
            type: String,
            required:true
        },
        WorkingHours:{
            type: String,            
            default:"8-14"
        },
        Status:{
            type: String,
            enum: ["Opened", "Closed"],
            default: "Opened"
        },
        Logo:{
            type: String,
            
        },
        AverageRate:{
            type: Number
        },
    }
);

const RentACarObject = mongoose.model("RentACarObject", rentACarObjectSchema);

module.exports = RentACarObject;