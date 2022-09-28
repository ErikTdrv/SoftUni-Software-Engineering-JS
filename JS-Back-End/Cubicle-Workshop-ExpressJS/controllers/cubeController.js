const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router()
const { createCube, getOneCube } = require("../services/cubeService");

// Create route
router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', authMiddleware ,async (req, res) => {
    const cube = req.body;
    await createCube(cube)
    res.redirect('/');
})
//Details route
router.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    const cube = await getOneCube(id);
    const accessories = cube.accessories;
    res.render('details', { cube, accessories })
})

//Edit
router.get('/details/edit/:id', async (req, res) => {
    const id = req.params.id;
    const cube = await getOneCube(id);
    console.log(cube)
    res.render('editCubePage', { cube })
})

//Delete
router.get('/details/delete/:id', async (req, res) => {
    const id = req.params.id;
    const cube = await getOneCube(id);
    res.render('deleteCubePage', { cube })
})

module.exports = router;