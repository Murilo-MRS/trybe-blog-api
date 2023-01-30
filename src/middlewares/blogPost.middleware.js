module.exports = (req, _res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) {
    const error = new Error('Some required fields are missing');
    error.type = 'MISSING_FIELDS';
    throw error;
  }

  next();
};