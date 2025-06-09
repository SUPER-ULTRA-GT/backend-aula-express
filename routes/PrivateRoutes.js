const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const BolosRouter = require('./BolosRoute');
const CafeRouter = require('./CafeRoute');
const UserRoute = require('./UserRoute')
const PrivateRoutes = express.Router();

// MIDDLEWARE

PrivateRoutes.use((req, res, next) => {
    const chaveApi = process.env.CHAVE_API;
    let token = req.headers.token;
    // Suporte ao header Authorization: Bearer <token>
    if (!token && req.headers.authorization) {
        const parts = req.headers.authorization.split(' ');
        if (parts.length === 2 && parts[0] === 'Bearer') {
            token = parts[1];
        }
    }
    if (!token) {
        return res.status(403).send('Nao autorizado');
    }
    try {
        jwt.verify(token, chaveApi);
        next();
    } catch (error) {
        return res.status(403).send('Token inválido ou expirado');
    }
})

PrivateRoutes.use(UserRoute);
PrivateRoutes.use(BolosRouter);
PrivateRoutes.use(CafeRouter);

module.exports = PrivateRoutes;