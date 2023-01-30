const express = require('express');
const userRouter = require('./user.routes');
const loginRouter = require('./login.routes');
const categoryRouter = require('./category.routes');

const routers = express.Router();

routers.use('/user', userRouter);
routers.use('/login', loginRouter);
routers.use('/categories', categoryRouter);

module.exports = routers;