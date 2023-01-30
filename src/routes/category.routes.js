const express = require('express');
const { categoryController } = require('../controllers');
const authenticateMiddleware = require('../middlewares/token.middleware');

const routers = express.Router();

routers.post('/', authenticateMiddleware, categoryController.createCategory);
routers.get('/', authenticateMiddleware, categoryController.getAllCategories);

module.exports = routers;
