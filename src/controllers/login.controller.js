const { loginService } = require('../services'); 

const login = async (req, res) => {
  const token = await loginService.loginAuthetication(req.body);
  res.status(200).send(token);
};

module.exports = {
  login,
};