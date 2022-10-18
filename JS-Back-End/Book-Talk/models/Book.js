const mongoose = require('mongoose');
const User = require('./User');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
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

