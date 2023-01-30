const express = require('express');
const userRouter = require('./user.routes');
const loginRouter = require('./login.routes');
const categoryRouter = require('./category.routes');
const blogPostRouter = require('./blogPost.routes');

const routers = express.Router();

routers.use('/user', userRouter);
routers.use('/login', loginRouter);
routers.use('/categories', categoryRouter);
routers.use('/post', blogPostRouter);

module.exports = routers;