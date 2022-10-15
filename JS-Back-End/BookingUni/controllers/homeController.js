const { isUser } = require('../middlewares/authMiddleware');
const { getHotelsSort, getBookedHotels, getOneUser } = require('../services/hotelService');

const router = require('express').Router();

    router.get('/', async (req, res) => {
        const hotels = await getHotelsSort()
        res.render('hotel/home', { hotels })
    })
    router.get('/profile', isUser ,async (req, res) => {
        const userId = req.user._id;
        const user = await getOneUser(userId);
        let reservations = await getBookedHotels(userId)
        reservations = reservations.join(', ')
        res.render('hotel/profile', { user , reservations})
    })
module.exports = router;