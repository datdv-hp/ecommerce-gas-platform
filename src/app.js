require('dotenv').config();
const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const app = express();

// init middleware
app.use(morgan('dev')); // logging
app.use(helmet()); // header protection
app.use(compression()); // compress payload

// add body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// init db
require('./databases/init.mongodb');
// const { checkOverLoad } = require('./heplers/check.connect');
// checkOverLoad();

// init routes
app.use('', require('./routes'));

// handling error

module.exports = app;
