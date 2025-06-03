const express = require('express');
const BolosController = require('../controllers/BolosController');

const BolosRouter = express.Router();

BolosRouter.get('/bolos', BolosController.read);

BolosRouter.get('/bolos/:id', )