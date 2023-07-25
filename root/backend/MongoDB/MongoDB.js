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

module.exports = connectToDb;
