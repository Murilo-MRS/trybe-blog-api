const { userService } = require('../services'); 
const generateToken = require('../utils/generateToken');

const signup = async (req, res) => {
  const { message } = await userService.signup(req.body);

  const payload = {
    displayName: message.displayName,
    email: message.email,
  };

  const token = generateToken(payload);

  res.status(201).json({ token });
};

const getAllUsers = async (_req, res) => {
  const { message } = await userService.getAllUsers();
  res.status(200).json(message);
};

const getAllUserById = async (req, res) => {
  const { id } = req.params;
  const { message } = await userService.getAllUserById(id);
  res.status(200).json(message);
};

module.exports = {
  signup,
  getAllUsers,
  getAllUserById,
};
