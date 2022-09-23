const express = require('express');
const router = express.Router();
const { homeController, aboutController } = require('../controllers/homeController');
const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');
const { createAccessory, getAllAccessories, attachAccessory, getAllWithout} = require('../services/accessoryService');
const { createCube, getOneCube, search } = require('../services/cubeService')


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
router.get('/accessory/attach/:id', async (req, res) => {
    const cubeId = req.params.id;
    const cube = await getOneCube(cubeId)
    const accessoriesArr = cube.accessories?.map((e) => e._id);
    const accessories = await getAllWithout(accessoriesArr);
    res.render('accessory/attach', { cube, accessories});
})

router.post('/accessory/attach/:id', async (req, res) => {
    const cubeId = req.params.id;
    const accessoryId = req.body.accessory
    await attachAccessory(cubeId, accessoryId)
    res.redirect('/')
})

//Details route
router.get('/cube/details/:id', async (req, res) => {
    const id = req.params.id;
    const cube = await getOneCube(id);
    const accessories = cube.accessories;
    res.render('details', { cube, accessories })
})


//Search functionality
router.get('/search', async (req, res) => {
    const body = req.query;
    const cubes = await search(body.search, body.from, body.to);
    res.render('index', { cubes, 
    title: 'Search',
'search': body.search, 'from': body.from, 'to': body.to})
})



module.exports = router