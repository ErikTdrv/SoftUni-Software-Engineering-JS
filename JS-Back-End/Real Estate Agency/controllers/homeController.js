const express = require('express');
const { createHouse } = require('../services/houseService');
const router = express.Router();

//Home
router.get('/', (req, res) => {

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
        res.redirect('/logout')
    } catch (err) {
        return res.status(400).render('house/create', { error: err.message })
    }
})
module.exports = router;