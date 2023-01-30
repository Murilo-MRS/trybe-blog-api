const express = require('express');
const { blogPostController } = require('../controllers');
const authenticateMiddleware = require('../middlewares/token.middleware');
const postMiddleware = require('../middlewares/post.middleware');

const routers = express.Router();

routers.get('/search', authenticateMiddleware, blogPostController.searchPost);
routers.get('/', authenticateMiddleware, blogPostController.getAllBlogPost);
routers.get('/:id', authenticateMiddleware, blogPostController.getBlogPostById);
routers.put('/:id', authenticateMiddleware, postMiddleware, blogPostController.updatePost);
routers.delete('/:id', authenticateMiddleware, blogPostController.deletePost);

module.exports = routers;
