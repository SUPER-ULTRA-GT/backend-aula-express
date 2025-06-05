const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const PrivateRoutes = express.Router();

// MIDDLEWARE

PrivateRoutes.use((req, res, next) => {
    if (req.headers.token !== 'banana') {
        const { token } = req.headers;
        jwt
    }
    next()
})