const mongoose = require('mongoose');


const tripSchema = new mongoose.Schema({
    userid: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    days: String,
    startDate: Date,
    endDate: String,
    startPoint: String,
    endPoint: String,
    shortDesc: String,
    maxRiders: String,
    pillion: {type: String, enum: ['yes', 'no'], default: 'yes'},
    category: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Trip', tripSchema);