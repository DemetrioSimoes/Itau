var app = require ('./custom-express')();
require("./routes/cadastro")(app);
require("./routes/registro")(app);

app.listen(3000,function(){
	console.log('servidor rodando');
});
