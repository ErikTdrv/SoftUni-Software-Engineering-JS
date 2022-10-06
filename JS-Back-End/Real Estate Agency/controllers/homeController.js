const express = require('express');
const { createHouse, getLast3Houses } = require('../services/houseService');
const router = express.Router();

//Home
router.get('/', async (req, res) => {
    const houses = await getLast3Houses()
    res.render('home', { houses })
})

//Create house
router.get('/create', (req, res) => {
    res.render('house/create')
})
router.post('/create', async (req, res) => {
    try {
        const userId = req.user._id;
        const {name, type, year, city, imageUrl, description, pieces} = req.body;
        await createHouse(name, type, year, city, imageUrl, description, pieces, userId)
        res.redirect('/create')
    } catch (err) {
        return res.status(400).render('house/create', { error: err.message })
    }
})
module.exports = router;