const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router()
const { createCube, getOneCube, editCube, deleteCube } = require("../services/cubeService");

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
router.post('/details/edit/:id', async (req, res) => {
    await editCube(req.params.id, req.body)
    res.redirect(`/cube/details/${req.params.id}`)
})

//Delete
router.get('/details/delete/:id', async (req, res) => {
    const id = req.params.id;
    const cube = await getOneCube(id);
    res.render('deleteCubePage', { cube })
})
router.post('/details/delete/:id', (req, res) => {
    const id = req.params.id;
    deleteCube(id)
    res.redirect('/')
})

module.exports = router;