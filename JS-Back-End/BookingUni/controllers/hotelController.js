const { addHotel, getOneHotel, updateHotel, deleteHotel, book } = require('../services/hotelService');
const House = require('../models/Hotel')
const router = require('express').Router();
const express = require('express')
const mongoose = require('mongoose');
const Hotel = require('../models/Hotel');
const { isGuest, isUser, isUserLoginRedirect } = require('../middlewares/authMiddleware');

//Add new hotel     
router.get('/add-hotel', isUser, (req, res) => {
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

//Details
router.get('/details/:id', isUserLoginRedirect ,async (req, res) => {
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

//Booking
router.get('/book/:id',isUser, async (req, res) => {
    const userId = req.user._id;
    const hotelId = req.params.id;
    await book(hotelId, userId)
    res.redirect(`/`)
})

//Edit 
router.get('/details/:id/edit', isUser, async (req, res) => {
    try {
        const id = req.params.id;
        const hotel = await getOneHotel(id);
        res.render('hotel/edit', hotel)
    } catch (error) {
        res.render('hotel/edit', { error: error.message })
    }
})
router.post('/details/:id/edit', async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        await updateHotel(id, body)
        res.redirect(`/details/${id}`)
    } catch (error) {
        const id = req.params.id;
        res.render('hotel/edit', { error: error.message, _id: id })
    }
})

//Delete
router.get('/details/:id/delete', isGuest, async (req, res) => {
    const id = req.params.id;
    await deleteHotel(id)
    res.redirect('/')
})
module.exports = router;