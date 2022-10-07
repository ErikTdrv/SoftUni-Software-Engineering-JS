const express = require('express');
const { createHouse, getLast3Houses, getOneHouse, getAllHouses, deleteHouse, editHouse } = require('../services/houseService');
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
    } catch (err) {
        return res.status(400).render('house/create', { error: err.message })
    }
    res.redirect('/')
})

//Details
router.get('/details/:id', async (req, res) => {
    let isOwn = false;
    let alreadyRented = false;
    let noMoreHousing = false;
    const userId = req.user?._id;
    const id = req.params.id;
    const house = await getOneHouse(id)
    if(house?.pieces == 0){
        noMoreHousing = true;
    }
    if(house?.rentedBy.includes(userId)){
        alreadyRented = true;
    }
    if(house?.owner == userId){
        isOwn = true;
    }
    res.render('house/details', { house, isOwn, alreadyRented, noMoreHousing })
})

//Housing for rent
router.get('/rent', async (req, res) => {
    const apartments = await getAllHouses();
    res.render('house/aprt-for-recent', { apartments })
})

//Edit
router.get('/details/:id/edit', async ( req, res) => {
    const id = req.params.id;
    const house = await getOneHouse(id);
    res.render('house/edit', house )
})
router.post('/details/:id/edit', async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        await editHouse(id, body)
        res.redirect(`/details/${id}`)
    } catch (error) {
        return res.status(400).render('house/edit', { error: err.message })
    }
})
router.get('/details/:id/delete', async (req, res) => {
    const id = req.params.id;
    await deleteHouse(id)
    res.redirect('/')
})

//Search
router.get('/search', async (req, res) => {
    res.render('search')
})
router.post('/search', async (req, res) => {
    const body = req.body.name;
    const apartments = await getOneHouse(null, body)
    res.render('search', {apartments})
})
module.exports = router;