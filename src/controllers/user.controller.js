const { userService } = require('../services'); 

const signup = async (req, res, next) => {
  try {
    const { message } = await userService.signup(req.body);
    
    res.status(201).json(message);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
};