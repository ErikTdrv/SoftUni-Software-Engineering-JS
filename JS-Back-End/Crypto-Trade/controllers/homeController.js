const { getAll, createCrypto } = require('../services/cryptoService');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home')
})
router.get('/all', async (req, res) => {
    const cryptos = await getAll()
    res.render('catalog', { crypto: cryptos})
})

//Create
router.get('/create', (req, res) => {
    res.render('create')
})
router.post('/create', async (req, res) => {
    const crypto = req.body;
    try {
        await createCrypto(crypto)
        res.redirect('/')
    } catch (error) {
        res.render('create', { error: error.message})
    }
})
module.exports = router;