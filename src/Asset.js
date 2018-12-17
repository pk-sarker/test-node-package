const mongoose = require('mongoose');
var SensorReading = require('./SensorReading');
var schema = {
    id: mongoose.Schema.Types.ObjectId,
    device_id: Number,
    tenantId: Number,
    alias: String,
    name: String,
    lastPacketId: String,
    description: String,
    address: {
        addressLine1: String,
        addressLine2: String,
        city: String,
        province: String,
        county: String,
        postalCode: String,
        country: String
    },
    type: Number,
    state: Number,
    healthStatus: Number,
    dwellTime: Number,
    parkedTimestamp: Date,
    timestamp: Date,
    parent_asset_id: Number,
    geometry: {
        "type": { "type": String },
        "coordinates": []
    },
    currentGeoFencePOI: mongoose.Schema.Types.ObjectId, 
    currentGeoFenceGeometry: {
        "type": {"type": String},
        "coordinates": []
    },
    lastGeoFencePOI: mongoose.Schema.Types.ObjectId,
    lastGeoFenceGeometry: {
        "type": {"type": String},
        "coordinates": []
    },
    sensorReadings: [new mongoose.Schema(SensorReading.schema)],
    isLoadedMated: Boolean,
    isPowered: Boolean
};

module.exports = {
    schema: schema,
    model: mongoose.model('Asset', schema)
}