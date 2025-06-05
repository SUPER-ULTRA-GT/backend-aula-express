const express = require('express');
const jwt = require('jsonwebtoken');
const BolosRouter = require('./BolosRoute');
const CafeRouter = require('./CafeRoute');
const UserRoute = require('./UserRoute')
require('dotenv').config();
const PrivateRoutes = express.Router();

// MIDDLEWARE

PrivateRoutes.use((req, res, next) => {

    if(req.headers.token) {
        jwt
    }
    next();
})

PrivateRoutes.use(UserRoute);
PrivateRoutes.use(BolosRouter);
PrivateRoutes.use(CafeRouter);

module.exports = PrivateRoutes;