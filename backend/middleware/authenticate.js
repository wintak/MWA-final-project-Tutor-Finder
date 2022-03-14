const jwt = require('jsonwebtoken');
const { secret } = require('../config/database');
const config = require('../config/database');
const verifyer = require('../tokenGenerator/tokenVerify');

module.exports = (req, res, next) => {
    let token =
        req.body.token || req.query.token || req.headers.authorization;
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
        token = req.query.token;
    }

    if (!token) {
        return res.json({
            success: false,
            data: {},
            msg: "A token is required for authentication",
            status: 403
        })
    }

    try {
        const data = verifyer.verified(token);
        req.user = data
    } catch (err) {
        return res.json({
                success: false,
                data: {},
                msg: "Invalid Token",
                status: 401
            })
            // return res.status(401).send("Invalid Token");
    }
    return next();
}