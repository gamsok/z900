var express = require('express');
var router = express.Router();
const ejs = require("ejs");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

app.get('/test', function(req, res){
    res.render("test," {});
});
