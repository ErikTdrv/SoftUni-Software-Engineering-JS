const express = require('express');
const router = express.Router();
const {homeController, aboutController} = require('../controllers/homeController')
const {createCube, getOneCube} = require('../services/cubeService')


//Home route
router.get('/', homeController)

//About route
router.get('/about', aboutController)

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

router.get('/search', async (req, res) => {
    const body = req.body
    console.log(body)
    res.end()
})


module.exports = router