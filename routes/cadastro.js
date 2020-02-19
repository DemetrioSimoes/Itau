var connectionFactory = require('../infra/connectionFactory');
var ProdutoDao = require('../infra/ProdutoDao');
	
module.exports=function(app){
	
	app.get("/cadastro",function(req,res){
	
		var connection = connectionFactory();
		var produtoDao = new ProdutoDao(connection);

		produtoDao.lista(function(error,results,fields){
			res.render("cadastro/lista",{lista:results});
		});
		connection.end();

	});

	app.get("/cadastro/form",function(req,res){
		res.render("cadastro/form");
	});
	

	app.post("/cadastro",function(req,res){
		var cadastro_= req.body;
		var connection = connectionFactory();
		var produtos= new ProdutoDao(connection);

		produtos.salva(cadastro_,function(exception,result){
			if(!exception){
				res.render("cadastro/salvo");
			}else{
				res.render(exception);
			}
		});
		connection.end();
	});
	
};

			
