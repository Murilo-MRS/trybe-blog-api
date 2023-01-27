const { User } = require('../models');
// const schema = require('./validations/validators');

const signup = async ({ username, password }) => {
  // const error = await schema.validateBody({ username, password });
  // if (error.type) {
  //   throw error;
  // }
  
  const createdUser = await User.create({ username, password });
  
  return { type: null, message: createdUser };
};

module.exports = {
  signup,
};