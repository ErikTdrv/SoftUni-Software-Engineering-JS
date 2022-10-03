const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.cookies['token']

    if(!token){
        return next();
    }

    jwt.verify(token, 'ASDPI-93KLASJD02', function(err, decodedToken) {
        if (err) {
            res.status(401).redirect('/login')
        }

        req.user = decodedToken;
        res.locals.user = decodedToken;
        next();
    });
}
module.exports = authMiddleware;