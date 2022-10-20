const { isUser } = require('../middlewares/authMiddleware');
const { createBook, getAllBooks, getOneBook, wishOneBook, updateBook, deleteBook, getProfileBooks } = require('../services/bookService');

const router = require('express').Router();

//Get home page
router.get('/', (req, res) => {
    res.render('home')
})

//Create page
router.get('/create', isUser, (req, res) => {
    res.render('book/create')
})
router.post('/create', async (req, res) => {
    const { title, author, genre, stars, review, imageUrl } = req.body;
    const userId = req?.user._id
    try {
        await createBook(title, author, genre, stars, review, imageUrl, userId)
        res.redirect('/')
    } catch (error) {
        res.render('book/create', { error: error.message })
    }
})

//Catalog page
router.get('/catalog', async (req, res) => {
    const books = await getAllBooks();
    res.render('book/catalog', { books })
})

//Details page
router.get('/details/:id', async (req, res) => {
    const bookId = req.params.id;
    const userId = req.user?._id;
    const book = await getOneBook(bookId)
    const wished = book.wishingList.some((id) => id == userId)
    if (book?.owner == userId) {
        book.isOwner = true;
    } else if (wished) {
        book.alreadyWished = true;
    }
    res.render('book/details', book)
})

//Wish 
router.get('/details/:id/wish', isUser, async (req, res) => {
    const bookId = req.params.id;
    const userId = req.user._id;
    await wishOneBook(bookId, userId)
    res.redirect(`/details/${bookId}`)
})

//Edit book 
router.get('/details/:id/edit', isUser, async (req, res) => {
    const bookId = req.params.id;
    const book = await getOneBook(bookId)
    res.render('book/edit', { book })
})
router.post('/details/:id/edit', async (req, res) => {
    const bookId = req.params.id;
    const { title, author, genre, stars, review, imageUrl } = req.body;
    try {
        await updateBook(bookId, title, author, genre, stars, review, imageUrl)
        res.redirect(`/details/${bookId}`)
    } catch (error) {
        req.body._id = bookId
        res.render('book/edit', { error: error.message, book: req.body })
    }
})
//Delete book
router.get('/details/:id/delete', isUser, (req, res) => {
    const bookId = req.params.id;
    deleteBook(bookId)
    res.redirect('/catalog')
})

//Profile 
router.get('/profile', isUser, async (req, res) => {
    const userId = req.user._id;
    const books = await getProfileBooks(userId)
    res.render('profile', { books, user: req.user })
})
module.exports = router;