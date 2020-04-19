var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var http = require('http');

var indexRouter = require('./routes/index');
var apiVersion1Router = require('./routes/api_v1');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1', apiVersion1Router);

var port = process.env.port || 3000;
http.createServer(app).listen(port);
