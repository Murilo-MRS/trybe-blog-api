const errorMap = {
  INVALID_FIELDS: 400,
  MISSING_FIELDS: 400,
  USER_NOT_FOUND: 404,
  INVALID_VALUE: 422,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};