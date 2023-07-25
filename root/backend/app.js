const express = require('express');
const bodyParser = require('body-parser');
const mongoPractice = require('./mongo');
const { MongoTimeoutError } = require('mongodb/lib/core');
const { mongo } = require('mongoose');
const connectToDb = require("./MongoDB/MongoDB")

const app = express();
connectToDb();


app.use(bodyParser.json());

app.get('/login', mongoPractice.logIn);

app.get('/getUser',mongoPractice.getUser);

app.listen(3000);