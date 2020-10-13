const mongoose = require('mongoose');


const tripSchema = new mongoose.Schema({
    userid: String,
    days: String,
    startDate: Date,
    endDate: Date,
    startPoint: String,
    endPoint: String,
    maxRider: String,
    pillion: {type: String, enum: ['yes', 'no'], default: 'yes'},
    category: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Trip', tripSchema);