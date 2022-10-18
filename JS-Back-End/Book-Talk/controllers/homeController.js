const { createBook, getAllBooks } = require('../services/bookService');

const router = require('express').Router();

//Get home page
router.get('/', (req, res) => {
    res.render('home')
})

//Create page
router.get('/create', (req, res) => {
    res.render('book/create')
})
router.post('/create', async (req, res) => {
    const {title,author, genre, stars, review, imageUrl} = req.body;
    const userId = req?.user._id
    try {
        await createBook(title,author, genre, stars, review, imageUrl, userId)
        res.redirect('/')
    } catch (error) {
        res.render('book/create', {error: error.message})
    }
})

//Catalog page
router.get('/catalog', async (req, res) => {
    const books = await getAllBooks();
    res.render('book/catalog',{ books })
})

module.exports = router;