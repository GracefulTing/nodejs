var express = require("express");

var app = express();

app.set("view engine","ejs");
app.use("/assets",express.static('assets'));

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

app.listen(8080);