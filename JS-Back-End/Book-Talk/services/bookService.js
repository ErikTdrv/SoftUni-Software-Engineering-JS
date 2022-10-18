const Book = require("../models/Book")

const createBook = async (title,author, genre, stars, review, imageUrl, owner) => {
    return await Book.create({title,author, genre, stars, review, imageUrl, owner})
}

module.exports = {
    createBook,
}