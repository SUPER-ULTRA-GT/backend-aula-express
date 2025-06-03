const express = require('express');
const AuthController = require('../controllers/AuthController');

const PublicRoutes = express.Router();

PublicRoutes.post('/login', (req, res) => {
    const body = req.body;
    const auth = new AuthController()
})