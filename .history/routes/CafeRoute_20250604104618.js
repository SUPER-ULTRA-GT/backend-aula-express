const express = require('express');
const CafeController = require('../controllers/CafeController');

const CafeRouter = express.Router();
const cafe = new CafeController();

CafeRouter.get('/cafe')