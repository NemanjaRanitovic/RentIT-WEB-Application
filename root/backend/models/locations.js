const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const locationSchema = mongoose.Schema(
    {
        Street:{
            type: String,
            required: true,
        },
        Number:{
            type: Number,
            required: true,
        },
        City:{
            type: String,
            required: true,
        },
        PostalCode:{
            type: Number,
            required: true,
        },
        Latitude:{
            type: Number,
            required: true,
        },
        Longitude:{
            type: Number,
            required: true,
        }
    }
);

const Location = mongoose.model("Location", locationSchema);
module.exports = Location;