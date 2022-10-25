const { registerUser, loginUser } = require('../services/authService');

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

    //Login
    router.get('/login', (req, res) => {
        res.render('auth/login')
    })
    router.post('/login', async (req, res) => {
        const { email, password } = req.body;
        try {
            await loginUser(email, password)
        } catch (error) {
            res.render('auth/login', { error: error.message})
        }
    })
module.exports = router;


