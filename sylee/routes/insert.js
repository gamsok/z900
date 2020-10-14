var express = require('express');
var router = express.Router();
var db_config = require('./dbconfig.js');
var conn = db_config.init();
var newDate = new Date();
require('date-utils');

router.post('/', function(req, res){
	var add_id = req.body.add_id;
	var time = newDate.toFormat('YYYY-MM-DD HH24:MI:SS');
	var sql_add = "insert into list(name,create_time) values('"+add_id+"','"+time+"');"
	var sql_select = "select name from list where name='"+add_id+"';"
	var Type = add_id.match(/^[A-Za-z0-9+]{4,48}$/);
	
	if(!Type){
	res.send('<script type="text/javascript">alert("형식 이상해");history.back();</script>');
	} else {
	    conn.query(sql_select, function(err, rows, fields){
	        if(rows.length){
	                res.send('<script type="text/javascript">alert("중복 방지");history.back();</script>');
	        } else {
				conn.query(sql_add, function (err, rows, fields){
				if(err) console.log('query is not excuted. select fail...\n' + err);
				else res.redirect('/userList');
				});
	        }
	    });
	}
});

module.exports = router;
