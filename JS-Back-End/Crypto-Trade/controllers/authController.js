const { registerUser } = require('../services/authService');

const router = require('express').Router();


    //Register
    router.get('/register', (req, res) => {
        res.render('auth/register')
    })
    router.post('/register', async (req, res) => {
        const {username, email, password, rePass } = req.body;
        try {
            if(password != rePass){
                throw new Error('Passwords must match')
            }
            await registerUser(username, email, password)
            res.redirect('/')
        } catch (error) {
            res.render('auth/register', { error: error.message})
        }
    })
module.exports = router;


