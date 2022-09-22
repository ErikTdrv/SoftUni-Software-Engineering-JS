const express = require('express');
const router = express.Router();
const { homeController, aboutController } = require('../controllers/homeController');
const Cube = require('../models/Cube');
const { createAccessory, getAllAccessories } = require('../services/accessoryService');
const { createCube, getOneCube } = require('../services/cubeService')


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
    const accessories = await getAllAccessories()
    res.render('accessory/attach', { cube, accessories});
})

// router.post('/accessory/attach/:id', (req, res) => {
//     const cubeId = req.params;
//     console.log(cubeId)
// // //     // const cube = await getOneCube(cubeId);
// // //     // console.log(res.body)
// // //     // Cube.updateOne({ _id: cubeId}, {$push: { accessories: []}})
//     res.redirect('/')
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