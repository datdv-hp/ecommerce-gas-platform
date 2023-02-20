const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const app = express();

// init middleware
app.use(morgan('dev')); // logging
app.use(helmet()); // header protection
app.use(compression()); // compress payload

// init db

// init routes
app.get('/', (req, res, next) => {
  const strCompress = 'Hello  DoVanDat DoVanDat';
  return res.status(200).json({
    message: 'Welcome',
    metadata: strCompress.repeat(10000),
  });
});

// handling error

module.exports = app;
