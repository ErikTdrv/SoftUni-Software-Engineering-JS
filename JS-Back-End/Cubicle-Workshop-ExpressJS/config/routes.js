const express = require('express');
const router = express.Router();
const {createCube, getOneCube} = require('../services/cubeService')

// Create route
router.get('/create', (req, res) => {
    res.render('create');
});
router.post('/create', async (req, res) => {
    const cube = req.body;
    await createCube(cube)
    res.redirect('/');
})

//Details route
router.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    const cube = await getOneCube(id);
    res.render('details', { cube })
})



module.exports = router