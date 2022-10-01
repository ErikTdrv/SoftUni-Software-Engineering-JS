const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router()
const { createCube, getOneCube, editCube, deleteCube } = require("../services/cubeService");

// Create route
router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', authMiddleware ,async (req, res) => {
    try{
        const cube = req.body;
        const id = req.user._id;
        await createCube(cube, id)
        res.redirect('/'); 
    }catch(err){
        res.status(401).render('create', {error: err.message})
    }
})
//Details route
router.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    const cube = await getOneCube(id);
    const accessories = cube.accessories;
    const isOwn = req.user._id == cube.creator;
    res.render('details', { cube, accessories, isOwn })
})

//Edit
router.get('/details/edit/:id', async (req, res) => {
    const id = req.params.id;
    const cube = await getOneCube(id);
    console.log(cube)
    res.render('editCubePage', { cube })
})
router.post('/details/edit/:id', async (req, res) => {
    try {
        await editCube(req.params.id, req.body)
        res.redirect(`/cube/details/${req.params.id}`)
    } catch (err) {
        res.status(401).render('create', {error: err.message})
    }
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