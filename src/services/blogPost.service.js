const { BlogPost, User, Category } = require('../models');

const getAllBlogPost = async () => {
  const blogPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
  ],
  });

  return { type: null, message: blogPosts };
};

module.exports = {
  getAllBlogPost,
};
