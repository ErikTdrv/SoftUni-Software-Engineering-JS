const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [6, 'Name must be at least 6 characters long!'],
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ['Apartment', 'Villa', 'House']
    },
    year: {
        type: Number,
        min: [1850, 'Year must be after 1850s!'],
        max: [2021, 'Year must be before 2021!'],
        required: true,
    },
    city: {
        type: String,
        minLength: [4, 'City must be at least 4 characters long!'],
        required: true,
    },
    imageUrl: {
        type: String, 
        validate: [/^https*/, 'Invalid URL!'],
        required: true,
    },
    description: {
        type: String, 
        maxLength: [60, 'Description must be no more than 60 characters long!'],
        required: true,
    },
    pieces: {
        type: Number, 
        min: [0, 'Pieces must be a positive number!'],
        max: [10, 'Pieces must be no more than 10!'],
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
