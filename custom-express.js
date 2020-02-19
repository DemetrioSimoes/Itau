var express = require ('express');
var bodyParser = require('body-parser');

module.exports = function(){
	var app = express();
	app.set('view engine','ejs');
	app.use(express.static("/public"));
	app.use(bodyParser.urlencoded());
	require('./routes/cadastro')(app);
	require('./routes/registro')(app);	
	return app;
};