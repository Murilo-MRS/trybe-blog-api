module.exports = (req, _res, next) => {
  const { title, content } = req.body;

  if (!title || !content) {
    const error = new Error('Some required fields are missing');
    error.type = 'MISSING_FIELDS';
    throw error;
  }

  next();
};