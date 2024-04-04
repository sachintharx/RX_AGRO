const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const solutionSchema = new Schema({
    ownerName: {
        type: String,
        required: true
    },
    problemName: {
        type: String,
        required: true
    },
    problemDescription: {
        type: String,
        required: true
    },
    problemType: {
        type: String, 
        required: true
    },
    timeRange: {
        type: Date, 
        required: true
    },
    district: {
        type: String, 
        required: true
    },

    solution: {
        type: String, 
        required: false
    }
});

const Solution = mongoose.model("Solution", solutionSchema);

module.exports = Solution;
