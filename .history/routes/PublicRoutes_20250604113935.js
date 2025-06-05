const jwt = require('jsonwebtoken');

const express = require('express');
const AuthController = require('../controllers/AuthController');

const PublicRoutes = express.Router();

PublicRoutes.post('/login', (req, res) => {
    const body = req.body;
    const auth = new AuthController();
    const data = auth.login(body.login, body.senha);
    if (data) {
        const token = jwt.sign(data, 'banana', {
            expiresIn: '8h'
        })
        return res.json
    };
    return res.json({
        message: 'Login ou senha incorreto.'
    })
})

module.exports = PublicRoutes;