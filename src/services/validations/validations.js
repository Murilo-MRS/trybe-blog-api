const { categoryBodySchema, userBodySchema } = require('./schema');

const validateUserBody = (body) => {
  const { error } = userBodySchema.validate(body);
  if (error) return { type: 'INVALID_FIELDS', message: error.message };

  return { type: '', message: '' };
};

const validateCategoryBody = (body) => {
  const { error } = categoryBodySchema.validate(body);
  if (error) return { type: 'INVALID_FIELDS', message: error.message };

  return { type: '', message: '' };
};

module.exports = {
  validateUserBody,
  validateCategoryBody,
};
