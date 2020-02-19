var mysql = require('mysql');

function createConnection(){
	return mysql.createConnection({
			host:'localhost',
			user: 'root',
			password: 'node',
			database:'ponto'
		});
};

module.exports = createConnection;
