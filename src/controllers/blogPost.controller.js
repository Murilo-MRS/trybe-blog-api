const { blogPostService } = require('../services');

const getAllBlogPost = async (_req, res) => {
  const { message } = await blogPostService.getAllBlogPost();
  res.status(200).json(message);
};

module.exports = {
  getAllBlogPost,
};