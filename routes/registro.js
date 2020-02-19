var connectionFactory = require('../infra/connectionFactory');
var ProdutoDao = require('../infra/ProdutoDao');
	
module.exports=function(app){
	
	app.get("/registro",function(req,res){
	
		var connection = connectionFactory();
		var produtoDao = new ProdutoDao(connection);

		produtoDao.listaregistro(function(error,results,fields){
			res.render("registro/lista",{listaregistro:results});
		});
		connection.end();

	});

	app.get("/registro/form",function(req,res){
		res.render("registro/form");
	});
	

	app.post("/registro",function(req,res){
		var registro_= req.body;
		var connection = connectionFactory();
		var produtos= new ProdutoDao(connection);

		produtos.salvaregistro(registro_,function(exception,result){
			if(!exception){
				res.render("registro/salvo");
			}else{
				res.render("registro/erro");
			}
		});
		connection.end();
	});
	
};

			
