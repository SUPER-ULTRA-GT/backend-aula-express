const express = require('express');
const BolosController = require('../controllers/BolosController');

const BolosRouter = express.Router();

const bolosController = 

BolosRouter.get('/bolos', BolosController.read);

BolosRouter.get('/bolos/:id', BolosController.getById);

BolosRouter.post('/bolos', BolosController.create);

BolosRouter.put('/bolos/:id', BolosController.update);

BolosRouter.delete('/bolos/:id', BolosController.delete);

module.exports = BolosRouter;