const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL ;

mongoose.connect (URL,{
    
    useNewUrlParser : true,
    useUnifiedTopology : true,
    //useFindAndModify: false,
    //useCreateIndex : true

});



const connection = mongoose.connection;
connection.once("open",( )=> {

    console.log("RX AGRO Mongodb Connection Success!");
    

});

//-------------------------------------------

const farmerRouter = require("./routes/farmers.js");

app.use("/farmer",farmerRouter);

const solutionRouter = require("./routes/solutions.js");

app.use("/solution",solutionRouter);


//----------------------------------------------

app.listen(PORT, () => {

    console.log(`RX AGRO Server is up and running on port ${PORT}`);


})
