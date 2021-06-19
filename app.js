const express = require('express');
const path = require('path');
const logger = require('morgan');

const indexRouter = require('./routes/index.router');
const app = express();
const db = require('./database')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
