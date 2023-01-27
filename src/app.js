const express = require('express');
const handleErrors = require('./middlewares/errors/handleErrors');
require('express-async-errors');
const routers = require('./routes');

// ...

const app = express();

app.use(express.json());

app.use(routers);

app.use(handleErrors);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
