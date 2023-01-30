const { BlogPost, User, Category } = require('../models');

const getAllBlogPost = async () => {
  const blogPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
  ],
  });

  return { type: null, message: blogPosts };
};

const getBlogPostById = async (id) => {
  const blogPost = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!blogPost) {
    const error = new Error('Post does not exist');
    error.type = 'POST_NOT_FOUND';
    throw error;
  }
  
  return { type: null, message: blogPost };
};

module.exports = {
  getAllBlogPost,
  getBlogPostById,
};
