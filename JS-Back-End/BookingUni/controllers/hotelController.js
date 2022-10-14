const { addHotel } = require('../services/hotelService');

const router = require('express').Router();

router.get('/add-hotel', (req, res) => {
    res.render('hotel/create')
})
router.post('/add-hotel', async (req, res) => {
    try {
        const { name, city, freeRooms, imageUrl} = req.body;
        await addHotel(name, city, freeRooms, imageUrl)
        res.redirect('/')
    } catch (error) {
        res.render('hotel/create', { error: error.message })
    }
})
module.exports = router;