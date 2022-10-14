const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    'name': {
        type: String, 
        required: true,
        unique: true,
    },
    'city': {
        type: String, 
        required: true,
    },
    'imageUrl': {
        type: String,
        required: true,
    },
    'freeRooms': {
        type: Number,
        required: true,
        min: [1, 'Number must be more than 1!'],
        max: [100, 'Number must be less than 100!']
    },
    'bookedUsers': [],
    'owner': {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
})

const Hotel = new mongoose.model('Hotel', hotelSchema)
module.exports = Hotel;

