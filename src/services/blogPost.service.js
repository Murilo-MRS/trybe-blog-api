const Sequelize = require('sequelize');
const { Op } = require('sequelize');
const { BlogPost, Category, PostCategory, User } = require('../models');
const authenticateToken = require('../utils/authenticateToken');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

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

const createPost = async ({ title, content, categoryIds }, loggedUser) => {
  const { email } = await authenticateToken(loggedUser);
  const { id } = await User.findOne({ where: { email } });
  
  try {
    const result = await sequelize.transaction(async (t) => {
      const blogPost = await BlogPost.create({
        title, content, userId: id,
      }, { transaction: t });
      const postCategories = categoryIds.map((e) => ({ categoryId: e, postId: blogPost.id }));
      await PostCategory.bulkCreate(postCategories, { transaction: t });
      return blogPost;
    });
    return await getBlogPostById(result.id);
  } catch (error) {
    const fail = new Error('one or more "categoryIds" not found');
    fail.type = 'INVALID_FIELDS';
    throw fail;
  }
};

const updatePost = async (id, loggedUser, body) => {
  const { email } = await authenticateToken(loggedUser);
  const { message: { user } } = await getBlogPostById(id);
  
  if (email !== user.email) {
    const error = new Error('Unauthorized user');
    error.type = 'INVALID_TOKEN';
    throw error;
  }

  await BlogPost.update({ ...body }, { where: { id } });
  
  const { message } = await getBlogPostById(id);
  
  return { type: null, message };
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
  createPost,
  deletePost,
  updatePost,
};
