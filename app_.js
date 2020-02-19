var customexpress = require ('./custom-express');

var app = customexpress ();

app.listen(3000,function(){
	console.log('servidor rodando');
});
