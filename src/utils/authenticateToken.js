const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = async (token) => {
  if (!token) {
    const error = new Error('Token not found');
    error.type = 'INVALID_TOKEN';
    throw error;
  }

  try {
    const verificationResponse = await jwt.verify(token, JWT_SECRET);
    console.log(verificationResponse);
    return verificationResponse;
  } catch (err) {
    const error = new Error('Expired or invalid token');
    error.type = 'INVALID_TOKEN';
    throw error;
  }
};
