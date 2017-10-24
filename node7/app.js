var express = require("express");

//实例化express对象
var app = express();

//配置视图引擎
app.set("view engine","ejs");
app.use("/assets",express.static('assets'));


//根据用户请求的地址,返回对应的数据信息
app.get("/",(req,res) => {
	// res.sendFile(__dirname + "/index.html");       //正常显示页面
 	// res.sendFile(__dirname + "/views/index.ejs");      //会下载
 	res.render("index");          //识别ejs
});

app.get("/contact",(req,res) => {
	// res.sendFile(__dirname + "/contact.html");       //正常显示页面
	// res.sendFile(__dirname + "/views/contact.ejs");    //会下载
	res.render("contact");       //识别ejs
});

//路由参数
app.get("/blogs/:sbqid",(req,res) => {
	// var sbqdata = {title:"博客1",author:"蹄蹄",body:"today is a good day!"}
	// res.render("blog",{id:req.params.sbqid,data:sbqdata});


	var sbqdata = [
		{title:"博客1",author:"蹄蹄",body:"today is a good1 day!"},
		{title:"博客2",author:"dede",body:"today is a good2 day!"},
		{title:"博客3",author:"爪子",body:"today is a good3 day!"}
	]
	res.render("blog",{id:req.params.sbqid,data:sbqdata});
});

//监听服务器端口号
app.listen(8080);