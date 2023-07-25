const mongoose = require("mongoose");
require('dotenv').config();

const connectToDb = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGOCLUSTERURI);
            console.log(`Connected: ${conn.connection.host}`);
    }catch(error){
            console.error(`Error: ${error.message}`);
            process.exit();
    }
};

const getUser = async(req,res,next) => 
{
    try{
        const conn = await mongoose.connect(process.env.MONGOCLUSTERURI);
        
    }catch(error){
        console.log(`Error: ${error.message}`);
    }


}



module.exports = connectToDb;
