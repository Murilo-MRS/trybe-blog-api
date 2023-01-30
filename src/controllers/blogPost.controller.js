const { blogPostService } = require('../services');

const getAllBlogPost = async (_req, res) => {
  const { message } = await blogPostService.getAllBlogPost();
  res.status(200).json(message);
};

const getBlogPostById = async (req, res) => {
  const { id } = req.params;

  const { message } = await blogPostService.getBlogPostById(id);

  res.status(200).json(message);
};

const searchPost = async (req, res) => {
  const { q } = req.query;

  const { message } = await blogPostService.searchPost(q);

  res.status(200).json(message);
};

module.exports = {
  getAllBlogPost,
  getBlogPostById,
  searchPost,
};