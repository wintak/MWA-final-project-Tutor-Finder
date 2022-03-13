const jwt = require('jsonwebtoken');
const config = require('../config/database');

module.exports.verified = (token) => {
    return jwt.verify(token, config.secret);
}
module.exports.verified = (token) => {
    return jwt.verify(token, config.secret);
}