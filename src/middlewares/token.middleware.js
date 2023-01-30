const authenticateToken = require('../utils/authenticateToken');

const authenticateMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  
  const user = await authenticateToken(token);
  
  res.user = user;
  next();
};

module.exports = authenticateMiddleware;
