const mongoose = require('mongoose');
var schema = {
    id: mongoose.Schema.Types.ObjectId,
    tenantId: Number,
    isCircle: Boolean,
    radius: Number,
    alias: String,
    type: Number,
    owner: Number,
    category: Number,
    name: String,
    description: String,
    timestamp: Date,
    coordinates: [],
    address: {
        addressLine1: String,
        addressLine2: String,
        city: String,
        province: String,
        county: String,
        postalCode: String,
        country: String
    },
    markForDeletion:  { type: Boolean, default: false },
    geometry: {
        "type": { "type": String },
        "coordinates": []
    }
};
module.exports = {
    schema: schema,
    model: mongoose.model('POI', schema)
}