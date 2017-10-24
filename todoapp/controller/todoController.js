var bodyParser = require("body-parser");      //解析

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var data = [{item:"Dog"},{item:"East"},{item:"West"}];

module.exports = function(app){
	// console.log(app);

	app.get("/todo",(req,res) => {
		res.render("todos",{todos:data});
	});

	app.post("/todo",urlencodedParser,(req,res) => {
		// console.log(req.body);
		data.push(req.body);         //将input内容放到数组
		res.json(data);              //以json数据返回前台
	});

	app.delete("/todo/:name",(req,res) => {
		// console.log(req.params.name);
		data = data.filter(function(todo){
			var value = todo.item !== req.params.name;
			//console.log(value);
			return value;
		})
		res.json(data);

		// for(var i=0;i<data.length;i++){
		// 	if(data[i].item == req.params.name){
		// 		data.splice(i,1);
		// 	}
		// }
		// res.json(data);
	});
	//ES6 = es2015: array method (for..of  filter map)
	//filter:过滤  满足条件的留下,不满足的干掉

}