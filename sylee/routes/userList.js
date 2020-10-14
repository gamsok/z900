var express = require('express');
var router = express.Router();
var db_config = require('./dbconfig.js');
var conn = db_config.init();
//db_config.connect(conn);

router.get('/', function (req, res) {
    var sql = 'SELECT * FROM list';    
    conn.query(sql, function (err, rows, fields) {
        if(err) console.log('query is not excuted. select fail...\n' + err);
        else res.render('userList', {
		list : rows
		});
    });
});

router.post('/', function(req, res){
	var del_id = req.body.del;
	var sql_del = "DELETE FROM list where name='"+del_id+"';";
	console.log(sql_del);
	conn.query(sql_del, function (err, rows, fields){
	if(err) console.log('query is not excuted. select fail...\n' + err);
	else res.redirect('/userList');
	});
});

module.exports = router;
