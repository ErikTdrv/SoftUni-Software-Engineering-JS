const { registerUser, createToken, loginUser } = require('../services/authService');

const router = require('express').Router();

//Register functionality
router.get('/register', (req, res) => {
    res.render('auth/register');
})
router.post('/register', async (req, res) => {
    const { email, username, password, rePass } = req.body;
    try {
        if(password != rePass){
            throw new Error('Passwords must match!')
        }
        const user = await registerUser(email, username, password);
        const token = createToken(user);
        res.cookie('token', token, {
            httpOnly: true,
        })
        res.redirect('/')
    } catch (error) {
        res.render('auth/register', {error: error.message})
    }
})

//Login functionality
router.get('/login', (req, res) => {
    res.render('auth/login')
})
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await loginUser(email, password)
        res.cookie('token', token, {
            httpOnly: true,
        })
        res.redirect('/')
    } catch (error) {
        res.render('auth/login', {error: error.message})
    }
})

//Logout
router.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/')
})

module.exports = router;