const { categoryService } = require('../services'); 

const createCategory = async (req, res) => {
  const { message } = await categoryService.createCategory(req.body);

  res.status(201).json(message);
};

const getAllCategories = async (_req, res) => {
  const { message } = await categoryService.getAllCategories();
  res.status(200).json(message);
};

module.exports = {
  createCategory,
  getAllCategories,
};
