const { getHotelsSort } = require('../services/hotelService');

const router = require('express').Router();

    router.get('/', async (req, res) => {
        const hotels = await getHotelsSort()
        console.log(hotels)
        res.render('hotel/home', { hotels })
    })
module.exports = router;