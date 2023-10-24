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
                type: String,
                required: true,
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
        Street:{
            type:String,
            
        },
        Number:{
            type:Number
        },
        City:{
            type:String
        },
        Latitude:{
            type:Number
        },
        Longitude:{
            type:Number
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
        Description:{
            type: String,
            default: '',
        },
        Image:{
            type: String,
            default: '',
        },
        Logo:{
            type: String,
            default: '',
        },
        AverageRate:{
            type: Number
        },
    }
);

const RentACarObject = mongoose.model("RentACarObject", rentACarObjectSchema);

module.exports = RentACarObject;