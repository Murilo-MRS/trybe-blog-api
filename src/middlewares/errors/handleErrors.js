const errorMap = require('../../utils/errorMap');

module.exports = (error, _req, res, _next) => {
  const { type, message } = error;
  if (type) {
    return res.status(errorMap.mapError(type)).json({ message });
  }
  res.status(500).json({ message: 'Internal server error' });
};
