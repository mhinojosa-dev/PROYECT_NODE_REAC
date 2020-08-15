const express = require('express');

const app = express();

// routes
//app.use(require('./users'));
//app.use(require('./posts'));
//app.use(require('./login'));
app.use(require('./autor'));
app.use(require('./carrito'));
app.use(require('./libro'));
app.use(require('./libro_carrito'));






module.exports = app;