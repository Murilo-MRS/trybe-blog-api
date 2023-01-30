const express = require('express');
const { blogPostController } = require('../controllers');
const authenticateMiddleware = require('../middlewares/token.middleware');

const routers = express.Router();

routers.get('/search', authenticateMiddleware, blogPostController.searchPost);
routers.get('/', authenticateMiddleware, blogPostController.getAllBlogPost);
routers.get('/:id', authenticateMiddleware, blogPostController.getBlogPostById);

module.exports = routers;
