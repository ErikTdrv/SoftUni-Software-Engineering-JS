const express = require('express');
const router = express.Router();
const {homeController, aboutController} = require('../controllers/homeController');
const { createAccessory } = require('../services/accessoryService');
const {createCube, getOneCube} = require('../services/cubeService')


//Home route
router.get('/', homeController)

//About route
router.get('/about', aboutController)

// Create route
router.get('/cube/create', (req, res) => {
    res.render('create');
});

router.post('/cube/create', async (req, res) => {
    const cube = req.body;
    await createCube(cube)
    res.redirect('/');
})

//Accessory routes
router.get('/accessory/create', (req, res) => {
    res.render('accessory/create')
})
router.post('/accessory/create', async (req, res) => {
    const accessory = req.body;
    await createAccessory(accessory);
    res.redirect('/')
})
router.get('/accessory/attach/:id', (req, res) => {
    res.render('accessory/attach');
})
// router.post('/accessory/attach/:id', () => {

// })

//Details route
router.get('/cube/details/:id', async (req, res) => {
    const id = req.params.id;
    const cube = await getOneCube(id);
    res.render('details', { cube })
})

router.get('/search', async (req, res) => {
    const body = req.body
    console.log(body)
    res.end()
})


module.exports = router