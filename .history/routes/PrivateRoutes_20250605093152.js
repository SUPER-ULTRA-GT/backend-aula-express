const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const BolosRouter = require('./BolosRoute');
const CafeRouter = require('./CafeRoute');
const UserRoute = require('./UserRoute')
const PrivateRoutes = express.Router();

// MIDDLEWARE

PrivateRoutes.use((req, res, next) => {

    let autorizado = false;
    const { token } = req.headers;
    if (!token) {
        return res.status(403).send('Nao autorizado');
    }
    jwt.verify(token, 'ASDFASDFALW1235@');
    // try {
    //     jwt.verify(token, process.env.CHAVE_API);
    //     next()
    // } catch (error) {
    //     return res.status(403).send(error)
    // }
})

PrivateRoutes.use(UserRoute);
PrivateRoutes.use(BolosRouter);
PrivateRoutes.use(CafeRouter);

module.exports = PrivateRoutes;