const { User } = require('../models');
const schema = require('./validations/validations');

const signup = async (body) => {
  const error = await schema.validateUserBody(body);

  if (error.type) {
    const fail = new Error(error.message);
    fail.type = 'INVALID_FIELDS';
    throw fail;
  }

  try {
    const { dataValues } = await User.create(body);
    return { type: null, message: dataValues };
  } catch (errorOnCreate) {
    const fail = new Error('User already registered');
    fail.type = 'ALREADY_EXISTS';
    throw fail;
  }
};

module.exports = {
  signup,
};