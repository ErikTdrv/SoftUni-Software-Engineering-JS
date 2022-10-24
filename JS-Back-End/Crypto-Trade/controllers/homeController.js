const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello')
    res.end()
})
module.exports = router;