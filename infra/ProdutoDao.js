function ProdutoDao(connection){
	this._connection=connection;
};

ProdutoDao.prototype.lista = function (callback){
	this._connection.query('select * from cadastro',callback);
};

ProdutoDao.prototype.salva = function (cadastro1,callback){
	this._connection.query('insert into cadastro SET ?', cadastro1, callback);
};

ProdutoDao.prototype.listaregistro = function (callback){
	this._connection.query('select * from registroponto',callback);
};

ProdutoDao.prototype.salvaregistro = function (registro,callback){
	this._connection.query('insert into registroponto SET ?', registro, callback);
};



module.exports =ProdutoDao;