const express = require('express');
const jwt = require('jsonwebtoken');
const BolosRouter = require('./BolosRoute');
const CafeRouter = require('./CafeRoute');
const UserRoute = require('./UserRoute')
require('dotenv').config();
const PrivateRoutes = express.Router();

// MIDDLEWARE

PrivateRoutes.use((req, res, next) => {
    console.log(req.headers.token)
    let autorizado = false;
    let token = req.headers.token;
    // Support Authorization: Bearer <token>
    if (!token && req.headers.authorization) {
        const parts = req.headers.authorization.split(' ');
        if (parts.length === 2 && parts[0] === 'Bearer') {
            token = parts[1];
        }
    }
    if (token && typeof token === 'string') {
        try {
            jwt.verify(token, process.env.CHAVE_API);
            autorizado = true;
        } catch (err) {
            return res.status(401).send('Token inválido ou expirado');
        }
    }
    if (autorizado === false) {
        return res.status(403).send('Nao autorizado')
    }
    next();
})

PrivateRoutes.use(UserRoute);
PrivateRoutes.use(BolosRouter);
PrivateRoutes.use(CafeRouter);

module.exports = PrivateRoutes;