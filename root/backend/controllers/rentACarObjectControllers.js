const asyncHandler = require('express-async-handler');
const generateToken = require('../util/generateToken');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://nemkac:e9NGQzxtp00tfLef@cluster0.60gcb2c.mongodb.net/?retryWrites=true&w=majority';

const getObjects = async(res, req) => {
    
}

module.exports = {getObjects};