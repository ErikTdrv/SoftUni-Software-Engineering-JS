const mongoose = require('mongoose');
const User = require('./User');


const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: [5, 'Title must have at least 5 characters!'],
        maxLength: [50, 'Max characters for title are 50!']
    },
    imageUrl: {
        type: String,
        required: true,
        validate: [/^http(s?)*:\/\//, 'Invalid URL!'],
    },
    content: {
        type: String,
        required: true,
        minLength: [10, 'Content must have at least 10 characters!']
    },
    category: {
        type: String,
        required: true,
        minLength: [3, 'Category must be at least 3 characters long!']
    },
    followList: [
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


const Blog = new mongoose.model('Blog', blogSchema);
module.exports = Blog;
