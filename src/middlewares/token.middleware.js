const authenticateToken = require('../utils/authenticateToken');

const authenticateMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  const userIsAuthenticated = await authenticateToken(token);
  if (!userIsAuthenticated) {
    const error = new Error('Invalid fields');
    error.type = 'INVALID_FIELDS';
    throw error;
  }
  res.locals.user = userIsAuthenticated;
  next();
};

module.exports = authenticateMiddleware;