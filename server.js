const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {PORT} = require('./config/config');
const morgan = require('morgan');
require('dotenv').config();


app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(require('./routes'));
app.listen(PORT, () => {
    console.log(`listen on ${PORT}`);
});