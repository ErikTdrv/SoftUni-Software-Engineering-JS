const { registerUser, createToken } = require('../services/authService');

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

module.exports = router;