const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const farmerSchema = new Schema({

    name : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    },

    // confirm_password : {
    //     type : String,
    //     required : true
    // }

}) 

const Farmer = mongoose.model("Farmer",farmerSchema);

module.exports = Farmer;