const Book = require("../models/Book")

const createBook = async (title,author, genre, stars, review, imageUrl, owner) => {
    return await Book.create({title,author, genre, stars, review, imageUrl, owner})
}
const getAllBooks = async () => {
    const books = await Book.find({}).lean();
    return books
}
const getOneBook = async (id) => {
    const book = await Book.findById(id).lean()
    return book
}
const wishOneBook = async (bookId, userId) => {
    const book = await Book.findById(bookId);
    book.wishingList.push(userId);
    await book.save()
}
const updateBook = async (bookId, title,author, genre, stars, review, imageUrl) => {
    await Book.findByIdAndUpdate(bookId, {title,author, genre, stars, review, imageUrl}, {
        runValidators: true,
    })
}
module.exports = {
    updateBook,
    wishOneBook,
    getOneBook,
    getAllBooks,
    createBook,
}