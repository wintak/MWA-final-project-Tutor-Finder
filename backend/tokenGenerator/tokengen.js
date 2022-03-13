const jwt = require('jsonwebtoken');
const config = require('../config/database');

module.exports.tokengen = (user) => {
    token = jwt.sign({ user },
        config.secret, {
            expiresIn: '1h'
        })
    return token;
}