const jwt = require('jsonwebtoken');
require('dotenv').config();

function signToken(payload, options = {}) {
    const chaveApi = process.env.CHAVE_API;
    return jwt.sign(payload, chaveApi, {
        expiresIn: '8h',
        ...options
    });
}

module.exports = { signToken };
