var express = require('express');
var router = express.Router();
var db_config = require('./dbconfig.js');
var conn = db_config.init();

router.get('/', function(req, res, next){
    res.render("userCheck", {});
});

router.post('/', function(req, res){ 
	var id = { 'client_id' : req.body.client_id };
	var post_json = JSON.stringify(id);
	var sql = "select name from list where name='"+req.body.client_id+"';"
	conn.query(sql, function(err, rows, fields){
		if(rows.length){
			    res.send("DB 일치 : " + post_json);
		} else {
				res.send("DB 불일치 : " + post_json);
		}
	});
});

module.exports = router;
