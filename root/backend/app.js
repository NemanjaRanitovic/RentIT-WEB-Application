const express = require('express');
const bodyParser = require('body-parser');
const mongoPractice = require('./mongo');
const { MongoTimeoutError } = require('mongodb/lib/core');
const { mongo } = require('mongoose');
const connectToDb = require("./MongoDB/MongoDB");
const userRoutes = require("./routes/userRoutes");
const locationRoutes = require("./routes/locationRoutes");
const {notFound, errorHandler} = require("./middlewares/errorMiddleware");
const  newRentACarObjectRoutes  = require('./routes/rentACarObjectRoutes');
const RentACarObject = require('./models/rentACarObjects');
const vehicleRoutes = require("./routes/vehicleRoutes");

const app = express();
connectToDb();


//app.use(bodyParser.json());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/locations', locationRoutes);
app.use('/rentObjects',newRentACarObjectRoutes);
app.use('/vehicles',vehicleRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(3000);