const express = require('express');
const jwt = require('jsonwebtoken');
const BolosRouter = require('./BolosRoute');
const CafeRouter = require('./CafeRoute');
require('dotenv').config();
const PrivateRoutes = express.Router();

// MIDDLEWARE

PrivateRoutes.use((req, res, next) => {

    res.status(403)
    // if (req.headers.token !== 'banana') {
    //     return res.status(403).send('Nao Autorizado');
    // }
    next()
})

PrivateRoutes.use(BolosRouter);
PrivateRoutes.use(CafeRouter);

module.exports = PrivateRoutes;