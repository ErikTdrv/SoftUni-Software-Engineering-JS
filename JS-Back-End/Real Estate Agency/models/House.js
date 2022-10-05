const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ['Apartment', 'Villa', 'House']
    },
    year: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String, 
        required: true,
    },
    description: {
        type: String, 
        required: true,
    },
    pieces: {
        type: Number, 
        required: true,
    },
    rentedBy: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
})

const House = mongoose.model('House', houseSchema)
module.exports = House;

// •	Name - string (required),
// •	Type - string (“Apartment”, “Villa”, “House”) required,
// •	Year - number (required),
// •	City – string (required),
// •	Home Image - string (required),
// •	Property Description - string (required),
// •	Available pieces - number(required)
// •	Rented a home - a collection of Users (reference to the User model)
// •	Owner - object Id (reference to the User model)
