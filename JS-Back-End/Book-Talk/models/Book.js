const mongoose = require('mongoose');
const User = require('./User');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: [2, 'Title must have more than 2 characters!']

    },
    author: {
        type: String,
        required: true,
        minLength: [5, 'Author must have more than 5 characters!']

    },
    imageUrl: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
        validate: [/^http(s?)*:\/\//, 'Invalid URL!'],
        minLength: [10, 'Review must have more than 10 characters!']
    },
    genre: {
        type: String,
        required: true,
        minLength: [3, 'Genre must have more than 3 characters!']

    },
    stars: {
        type: Number,
        required: true,
        min: [1, 'Number must be higher than 1!'],
        max: [5, 'Number must be lower than 5!'],
    },
    wishingList: [
        {
            type: mongoose.Types.ObjectId,
            ref: User,
        }
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: User,
    }
})

const Book = new mongoose.model('Book', bookSchema);
module.exports = Book;

