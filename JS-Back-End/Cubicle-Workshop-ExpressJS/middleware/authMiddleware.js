const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    let token = req.cookies['app_token'];

    if (!token) {
        res.redirect('/')
        return
    }

    jwt.verify(token, 'ASDPI-93KLASJD02', function(err, decodedToken) {
        if (err) {
            return res.status(401).redirect('/login');
        }

        req.user = decodedToken;
        res.locals.user = decodedToken;
        next();
    });
};

module.exports = authMiddleware