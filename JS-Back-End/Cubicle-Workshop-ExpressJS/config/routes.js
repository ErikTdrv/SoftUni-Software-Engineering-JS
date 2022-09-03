const express = require('express');
const router = express.Router();
const {createCube, getOneCube} = require('../services/cubeService')

// Create route
router.get('/create', (req, res) => {
    res.render('create');
});
router.post('/create', (req, res) => {
    const cube = req.body;
    createCube(cube.name, cube.description, cube.imageUrl, cube.difficulty)
    res.redirect('/');
})

//Details route
router.get('/details/:id', (req, res) => {
    const id = req.params.id;
    const cube = getOneCube(id);
    console.log(cube)
    res.render('details', { cube })
})



module.exports = router