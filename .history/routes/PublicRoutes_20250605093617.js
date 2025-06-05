const jwt = require('jsonwebtoken');
require('dotenv').config();
const express = require('express');
const AuthController = require('../controllers/AuthController');

const PublicRoutes = express.Router();

const chaveApi = 
PublicRoutes.post('/login', (req, res) => {
    const body = req.body;
    const auth = new AuthController();
    const data = auth.login(body.login, body.senha);
    if (data) {
        const token = jwt.sign(data, process.env.CHAVE_API, {
            expiresIn: '8h'
        });
        return res.json({
            token: token
        });
    };
    return res.json({
        message: 'Login ou senha incorreto.'
    })
})

module.exports = PublicRoutes;