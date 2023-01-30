const express = require('express');
const { blogPostController } = require('../controllers');
const authenticateMiddleware = require('../middlewares/token.middleware');

const routers = express.Router();

// routers.post('/', authenticateMiddleware, blogPostController.createCategory);
routers.get('/', authenticateMiddleware, blogPostController.getAllBlogPost);
routers.get('/:id', authenticateMiddleware, blogPostController.getBlogPostById);

module.exports = routers;
