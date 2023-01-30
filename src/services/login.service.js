const { User } = require('../models');
const generateToken = require('../utils/generateToken');

const loginAuthetication = async ({ email, password }) => {
  if (!email || !password) {
    const error = new Error('Some required fields are missing');
    error.type = 'MISSING_FIELDS';
    throw error;
  }

  const user = await User.findOne({
    where: { email, password },
    attributes: ['email', 'displayName'],
  });

  if (!user) {
    const error = new Error('Invalid fields');
    error.type = 'INVALID_FIELDS';
    throw error;
  }

  const token = generateToken(user.dataValues);

  return { token };
};

module.exports = {
  loginAuthetication,
};