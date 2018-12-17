const mongoose = require('mongoose');

var schema = {
    ruleId: Number,
    alertType: Number,
    assetState: Number,
    locale: Object,
    sensorReadingType: Number,
    sensorReading: Number
};

module.exports = {
    schema: schema,
    model: mongoose.model('alerts', schema)
}