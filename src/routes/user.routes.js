const express = require('express');
const { userController } = require('../controllers');
const authenticateMiddleware = require('../middlewares/token.middleware');

const routers = express.Router();

routers.post('/', userController.signup);
routers.get('/', authenticateMiddleware, userController.getAllUsers);
// routers.get('/:id', userController.signup);
// routers.delete('/me', userController.signup);

module.exports = routers;
