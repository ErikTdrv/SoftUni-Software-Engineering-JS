const { addHotel, getOneHotel } = require('../services/hotelService');
const House = require('../models/Hotel')
const router = require('express').Router();
const express = require('express')
const mongoose = require('mongoose');
const Hotel = require('../models/Hotel');
router.get('/add-hotel', (req, res) => {
    res.render('hotel/create')
})
router.post('/add-hotel', async (req, res) => {
    try {
        const ownerId = req.user._id;
        const { name, city, freeRooms, imageUrl} = req.body;
        await addHotel(name, city, freeRooms, imageUrl, ownerId)
        res.redirect('/')
    } catch (error) {
        res.render('hotel/create', { error: error.message })
    }
})

router.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    const hotel = await getOneHotel(id);
    let isBooked = false;
    let isOwner = false;
    if(hotel.owner == req?.user._id){
        isOwner = true;
    }
    if(hotel?.bookedUsers.includes(req.user._id)){
        isBooked = true;
    }
    res.render('hotel/details', { hotel, isOwner, isBooked})
})

router.get('/book/:id', async (req, res) => {
    const userId = req.user._id;
    const id = req.params.id;
    const hotel = await Hotel.findById(id);
    hotel?.bookedUsers.push(userId)
    await hotel.save()
    res.redirect(`/`)
})
module.exports = router;