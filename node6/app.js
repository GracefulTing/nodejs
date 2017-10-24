var express = require("express");

var app = express();

app.get("/",(req,res) => {      //回调函数
	// console.log(req);
	res.send("This is Home page!");           //与res.end()类似
});

app.get("/contact",(req,res) => {
	res.send("This is Contact page!");
});

app.get("/blogs/:sbqid",(req,res) => {
	//console.log(req);
	res.send("具体的路由参数为:"+req.params.sbqid);
});

app.listen(8080);         //第二个参数可写可不写,默认主机




