const mongoose = require('mongoose');
var Alert = require('./Alert');

var schema = {
    type: Number,
    name: String,
    description: String,
    timestamp: Date,
    reading: Number,
    unit: Number,
    unitType: Number,
    partType: Number,
    alert: new mongoose.Schema(Alert.schema)
};
module.exports = {
    schema: schema,
    model: mongoose.model('SensorReading', schema),
};