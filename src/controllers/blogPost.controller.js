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

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;

  const { message } = await blogPostService.updatePost(id, authorization, req.body);

  res.status(200).json(message);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;

  await blogPostService.deletePost(id, authorization);

  res.status(204).end();
};

module.exports = {
  getAllBlogPost,
  getBlogPostById,
  searchPost,
  deletePost,
  updatePost,
};