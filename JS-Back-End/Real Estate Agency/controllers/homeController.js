const express = require('express');
const { createHouse, getLast3Houses, getOneHouse, getAllHouses, deleteHouse, editHouse, rentHome, getRentingPeople } = require('../services/houseService');
const router = express.Router();
const { isUser, isOwner } = require('../middlewares/authMiddleware')

//Home
router.get('/', async (req, res) => {
    const houses = await getLast3Houses()
    res.render('home', { houses })
})

//Create house
router.get('/create', isUser ,(req, res) => {
    res.render('house/create')
})
router.post('/create', async (req, res) => {
    try {
        const userId = req.user._id;
        const { name, type, year, city, imageUrl, description, pieces } = req.body;
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
    if (house?.pieces == 0) {
        noMoreHousing = true;
    }
    if (house?.rentedBy == userId) {
        alreadyRented = true;
    }
    if (house?.owner == userId) {
        isOwn = true;
    }
    //Getting names 
    const nameArray = await getRentingPeople(id)
    const names = await (await Promise.all(nameArray)).join(', ')
    res.render('house/details', { house, isOwn, alreadyRented, noMoreHousing, names })
})

//Housing for rent
router.get('/rent', async (req, res) => {
    const apartments = await getAllHouses();
    res.render('house/aprt-for-recent', { apartments })
})

//Edit
router.get('/details/:id/edit', isOwner , async (req, res) => {
    const id = req.params.id;
    const house = await getOneHouse(id);
    res.render('house/edit', { house })
})
router.post('/details/:id/edit', async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        await editHouse(id, body)
        res.redirect(`/details/${id}`)
    } catch (err) {
        const idS = req.params.id;
        const house = req.body;
        house['_id'] = idS;
        res.status(400).render('house/edit', { house: req.body, error: err.message})
    }
})
router.get('/details/:id/delete', isOwner, async (req, res) => {
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
    res.render('search', { apartments })
})

router.get('/renthome/:id', async (req, res) => {
    const user = req.user;
    const id = req.params.id;
    if(user._id != id){
        await rentHome(id, user)
    }
    //TO DO:
    // const names = nameArray.map(async (name) => {
    //     const currentName = await name
    //     return currentName
    // })
    // console.log(await names)
    res.redirect(`/details/${id}`)
})
module.exports = router;