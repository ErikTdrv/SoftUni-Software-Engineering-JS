const express = require('express');
const { registerUser } = require('../services/authService');
const router = express.Router();

router.get('/register', (req, res) => {
    res.render('auth/register')
})
router.post('/register', async (req, res) => {
    try{
        const { name, username, password, rePass } = req.body;
        await registerUser(name, username, password)
        res.redirect('/')
    }catch(err){
        console.log(err.message)
        res.status(400).render('auth/register', {error: err.message})
    }
})

module.exports = router;