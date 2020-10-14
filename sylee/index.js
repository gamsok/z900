var express = require('express');
var app = express();
var ejs = require("ejs");
var router = express.Router();
var userCheck = require('./routes/userCheck')
var userList = require('./routes/userList')
var insert = require('./routes/insert')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use('/userCheck', userCheck);
app.use('/userList', userList);
app.use('/insert', insert);

var server = app.listen(9001, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Server is working : PORT - ',port);
});
