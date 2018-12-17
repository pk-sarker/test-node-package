const mongoose = require('mongoose');
var schema = {
    type: Number,
    name: String,
    description: String,
    timestamp: Date,
    reading: Number,
    unit: Number,
    unitType: Number,
    partType: Number,
    alert: AlertSchema
};
module.exports = {
    schema: schema,
    model: mongoose.model('SensorReading', schema),
};