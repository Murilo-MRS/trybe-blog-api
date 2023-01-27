const express = require('express');
const { userController } = require('../controllers');

const routers = express.Router();

routers.post('/', userController.signup);
// routers.get('/', userController.signup);
// routers.get('/:id', userController.signup);
// routers.delete('/me', userController.signup);

module.exports = routers;