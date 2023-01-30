const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../models');
const authenticateToken = require('../utils/authenticateToken');

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

const searchPost = async (searchTerm) => {
  const postList = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${searchTerm}%` } },
        { content: { [Op.like]: `%${searchTerm}%` } },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  
  return { type: null, message: postList };
};

const updatePost = async (id, loggedUser, body) => {
  const { email } = await authenticateToken(loggedUser);
  const { message: { user } } = await getBlogPostById(id);
  
  if (email !== user.email) {
    const error = new Error('Unauthorized user');
    error.type = 'INVALID_TOKEN';
    throw error;
  }

  const postUpdated = await BlogPost.update({ ...body }, { where: { id } });
  
  return { type: null, message: postUpdated };
};

const deletePost = async (id, loggedUser) => {
  const { email } = await authenticateToken(loggedUser);
  const { message: { user } } = await getBlogPostById(id);
  
  if (email !== user.email) {
    const error = new Error('Unauthorized user');
    error.type = 'INVALID_TOKEN';
    throw error;
  }

  await BlogPost.destroy({ where: { id } });
  
  return { type: null, message: 'Deleted' };
};

module.exports = {
  getAllBlogPost,
  getBlogPostById,
  searchPost,
  deletePost,
  updatePost,
};
