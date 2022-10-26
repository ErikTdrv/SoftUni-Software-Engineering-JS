const { getAll } = require('../services/cryptoService');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home')
})
router.get('/all', async (req, res) => {
    const cryptos = await getAll()
    res.render('catalog', { crypto: cryptos})
})
module.exports = router;