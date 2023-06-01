var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors'); // add at the top

var indexRouter = require('./routes/index');
var hotelsRouter = require('./routes/hotels');

var app = express();
app.use(cors()); // add after 'app' is created

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
/* app.use(express.static(path.join(__dirname, 'public'))); */

app.use('/', indexRouter);
app.use('/api/hotels', hotelsRouter);

module.exports = app;
