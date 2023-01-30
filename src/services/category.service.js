const { Category } = require('../models');
const schema = require('./validations/validations');

const createCategory = async (name) => {
  const error = await schema.validateCategoryBody(name);
  if (error.type) {
    const fail = new Error(error.message);
    fail.type = 'INVALID_FIELDS';
    throw fail;
  }
  
  const { dataValues } = await Category.create(name);
  console.log(dataValues);

  return { type: null, message: dataValues };
};

const getAllCategories = async () => {
  const users = await Category.findAll({
    attributes: { exclude: ['password'] },
  });
  return { type: null, message: users };
};

module.exports = {
  createCategory,
  getAllCategories,
};
