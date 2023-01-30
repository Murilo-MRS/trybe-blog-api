const { User } = require('../models');
const authenticateToken = require('../utils/authenticateToken');
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

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return { type: null, message: users };
};

const getAllUserById = async (id) => {
  const user = await User.findByPk(id,
    {
      attributes: { exclude: ['password'] },
    });

  if (!user) {
    const error = new Error('User does not exist');
    error.type = 'USER_NOT_FOUND';
    throw error;
  }

  return { type: null, message: user };
};

const deleteUser = async (user) => {
  const { email } = await authenticateToken(user);
  
  const deleted = await User.destroy({
    where: { email },
  });
  return { type: null, message: deleted };
};

module.exports = {
  signup,
  getAllUsers,
  getAllUserById,
  deleteUser,
};
