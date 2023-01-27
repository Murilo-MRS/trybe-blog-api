const { loginService } = require('../services'); 

const login = async (req, res) => {
  const auth = await loginService.loginAuthetication(req.body);
  res.status(200).send(auth);
};

module.exports = {
  login,
};