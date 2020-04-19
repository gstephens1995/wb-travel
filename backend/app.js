var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var http = require('http');

var indexRouter = require('./routes/index');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

var port = process.env.port || 3000;
http.createServer(app).listen(port);
