const express = require('express');
const router = express.Router();
const { getAllCubes, search } = require('../services/cubeService');

router.get('/', async (req, res) => {
    const cubes = await getAllCubes()
    res.render('index', { cubes })
})
router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/search', async (req, res) => {
    const body = req.query;
    const cubes = await search(body.search, body.from, body.to);
    res.render('index', {
        cubes,
        title: 'Search',
        'search': body.search, 'from': body.from, 'to': body.to
    })
})

module.exports = router;