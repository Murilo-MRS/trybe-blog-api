const { userBodySchema } = require('./schema');

const validateUserBody = (body) => {
  const { error } = userBodySchema.validate(body);
  if (error) return { type: 'INVALID_FIELDS', message: error.message };

  return { type: '', message: '' };
};

module.exports = {
  validateUserBody,
};
