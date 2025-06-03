const express = require('express');
const UserController = require('../controllers/UserController');

const UserRoute = express.Router();

const userController = new UserController();

UserRoute.get('/users', userController.read);

UserRoute.get('/users/:id', userController.getById);

UserRoute.post('/users', userController.create);

UserRoute.put('/users/:id', userController.update);

UserRoute.delete('/users/:id', userController)