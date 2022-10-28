const { getAll, createCrypto, getOne } = require('../services/cryptoService');

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
    crypto.owner = req.user._id
    try {
        await createCrypto(crypto)
        res.redirect('/')
    } catch (error) {
        res.render('create', { error: error.message})
    }
})

//Details
router.get('/details/:id', async (req, res) => {
    const cryptoId = req.params.id;
    const crypto = await getOne(cryptoId);
    if(req.user?._id == crypto.owner){
        crypto.isOwner = true;
    }
    if(crypto.buyers.includes(req.user?._id)){
        crypto.alreadyBought = true;
    }
    res.render('details', crypto)
})

//Edit
router.get('/details/:id/edit', async (req, res) => {
    const cryptoId = req.params.id;
    const crypto = await getOne(cryptoId)
    res.render('edit', crypto)
})
module.exports = router;