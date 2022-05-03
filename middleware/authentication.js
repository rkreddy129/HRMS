const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");


async function isAuthenticate(req, res, next) {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) return res.sendStatus(401)

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, userDetails) => {
            if (err) return res.sendStatus(403)
            req.userDetails = userDetails
            next()
        })
    } catch {
        res.sendStatus(500)
    }
}

module.exports = {
    isAuthenticate
};