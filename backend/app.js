var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var http = require('http');
var cors = require('cors');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var apiVersion1Router = require('./routes/api_v1');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(cors());

const url = "mongodb+srv://wb-travel:wb-travel@cluster0-vxj3i.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err) throw err;
    console.log("MongoDB connected!")
})

app.use('/', indexRouter);
app.use('/api/v1', apiVersion1Router);

var port = process.env.port || 3000;
http.createServer(app).listen(port, () => {console.log(`Server is running on port ${port}`)});
