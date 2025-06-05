const express = require('express');
const jwt = require('jsonwebtoken');
const BolosRouter = require('./BolosRoute');
const CafeRouter = require('./CafeRoute');
const UserRoute = require('./UserRoute')
require('dotenv').config();
const PrivateRoutes = express.Router();

// MIDDLEWARE

PrivateRoutes.use((req, res, next) => {

    let autorizado = false;
    if(req.headers.token) {
        // const token = req.headers.token
        const { token } = req.headers;
        jwt.verify(token);
        autorizado = true;
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