const express = require('express');
const UserController = require('../controllers/UserController');

const UserRoute = express.Router();

const userController = new UserController();

UserRoute.get('/users', userController.read());

UserRoute.